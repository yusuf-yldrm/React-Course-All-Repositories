import React, { useState } from 'react'
import useInput from "../hooks/use-input"

const SimpleInput = (props) => {

    const {
        enteredValue : enteredName, 
        valueChangeHandler: enteredNameChangeHandler, 
        hasError : nameInputIsInvalid,
        inputBlurHandler : enteredNameBlurHandler, 
        valueIsValid: enteredNameIsValid,
        inputClassName: nameInputClasses,
        reset: nameInputReset
    } = useInput(text => text.trim() !== '')

 
    // Mail
    const {
        enteredValue: enteredMail,
        valueChangeHandler: enteredMailChangeHandler,
        hasError: enteredMailIsInvalid,
        inputBlurHandler: enteredMailBlurHandler,
        valueIsValid: enteredMailIsValid,
        inputClassName: mailInputClasses,
        reset: mailInputReset
    } = useInput(text => {
        const pattern = /\S+@\S+\.\S+/
        const valueIsValid = pattern.test(text) 
        return valueIsValid
    })



    let formIsValid = false

    if(enteredMailIsValid && enteredNameIsValid) {
        formIsValid = true
    }


    const formSubmitHandler = (event) => {
        event.preventDefault()

        if(!enteredNameIsValid || !enteredNameIsValid) {
            return
        }

        nameInputReset()
        mailInputReset()
        // setEnteredNameTouched(false)
    }


    return (
        <form onSubmit={formSubmitHandler}>
            <div className={nameInputClasses}>
                <label htmlFor='name'>Your Name</label>
                <input
                    id="name" 
                    type="text"
                    onChange={enteredNameChangeHandler}
                    onBlur={enteredNameBlurHandler}
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <div className='error-text'>
                        Entered name not must be empty!!!
                    </div>
                )}
            </div>

            <div className={mailInputClasses}>
                <label htmlFor='name'>Your E Mail</label>
                <input
                    id="name" 
                    type="text"
                    onChange={enteredMailChangeHandler}
                    onBlur={enteredMailBlurHandler}
                    value={enteredMail}
                />
                {enteredMailIsInvalid && (
                    <div className='error-text'>
                        Mail is invalid example: username@site.domain
                    </div>
                )}
            </div>

            <div className='form-actions'>
                <button type='submit' disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput