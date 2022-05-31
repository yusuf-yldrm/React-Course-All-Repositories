import {useState} from 'react'

const useInput = (validateValue) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = (event) =>  {
        setEnteredValue(event.target.value)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    const inputClassName = hasError ? 'form-control invalid' : 'form-control'

    return {value : enteredValue,isValid: valueIsValid, hasError, valueIsValid, valueChangeHandler, inputBlurHandler, inputClassName, reset}
}

export default useInput