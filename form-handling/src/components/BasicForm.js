import useInput from "../hooks/use-input"

const isNotEmpty = (value) => value.trim() !== ''
const isContainEmail = (value) => value.includes('@')

const BasicForm = () => {


    const {
        value: nameInputValue,
        valueChangeHandler: nameInputChangeHandler,
        inputBlurHandler: nameInputBlurHandler,
        isValid: nameInputIsValid,
        reset: nameInputReset,
        inputClassName: nameInputClasses,
        hasError: nameInputIsInvalid
    } = useInput(isNotEmpty)

    const {
        value: lastNameInputValue,
        valueChangeHandler: lastNameInputChangeHandler,
        inputBlurHandler: lastNameInputBlurHandler,
        reset: lastNameInputReset,
        isValid: lastNameInputIsValid,
        inputClassName: lastNameInputClasses,
        hasError: lastNameInputIsInvalid
    } = useInput(isNotEmpty)

    const {
        value: mailInputValue,
        valueChangeHandler: mailInputChangeHandler,
        inputBlurHandler: mailInputBlurHandler,
        reset: mailInputReset,
        isValid: mailInputIsValid,
        inputClassName: mailInputClasses,
        hasError: mailInputIsInvalid
    } = useInput(isContainEmail)


    let formIsValid = false

    console.log(nameInputIsValid, lastNameInputIsValid, mailInputIsValid)

    if(nameInputIsValid && lastNameInputIsValid && mailInputIsValid) {
        formIsValid = true
    }

    
    const formSubmitHandler = (e) => {
        e.preventDefault()

        if(!formIsValid) {
            return
        }
        alert('success form submitted')

        nameInputReset()
        lastNameInputReset()
        mailInputReset()
    }
    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Name</label>
                <input 
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    value={nameInputValue}
                    type="text" 
                    id="name" 
                />
                {nameInputIsInvalid && (
                    <p className="error-text">
                        name input is not be empty
                    </p>
                )}
            </div>

            <div className={lastNameInputClasses}>
                <label htmlFor='lastName'>Last Name</label>
                <input 
                    type="text" 
                    id="lastName" 
                    onChange={lastNameInputChangeHandler}
                    onBlur={lastNameInputBlurHandler}
                    value={lastNameInputValue}
                />
                {lastNameInputIsInvalid && (
                    <p className="error-text">
                        name input is not be empty
                    </p>
                )}
            </div>

            
            <div className={mailInputClasses}>
                <label htmlFor='mail'>Mail Address</label>
                <input 
                    type="text" 
                    id="mail" 
                    value={mailInputValue} 
                    onChange={mailInputChangeHandler} 
                    onBlur={mailInputBlurHandler}
                />
                {console.log(mailInputIsInvalid)}
                {mailInputIsInvalid && (
                    <p className="error-text">
                        mail syntax is wrong please check !!!
                    </p>
                )}
            </div>

            <div className='form-actions'>
                <button type='submit' disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default BasicForm