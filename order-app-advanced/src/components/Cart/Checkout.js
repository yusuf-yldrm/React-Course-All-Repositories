import { useState, useRef } from 'react'
import s from './Checkout.module.css'

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;


const Checkout = (props) => {

  const [isFormValid, setIsFormValid] = useState(false)

  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()


  const formSubmitHandler = (e) => {
    e.preventDefault()

  
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

    const formIsValid = enteredNameIsValid &&
    enteredCityIsValid && 
    enteredStreetIsValid &&
    enteredPostalCodeIsValid

    if(!formIsValid) {
      alert('error')
      return
    }

    console.log("success")
  }


  return (
    <form onSubmit={formSubmitHandler}>
      <div className={s.control}>
        <label htmlFor='name'>Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={s.control}>
        <label htmlFor='street'>Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>

      <div className={s.control}>
        <label htmlFor='postalCode'>Postal Code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef}/>
      </div>

      <div className={s.control}>
        <label htmlFor='city'>City</label>
        <input type="text" id="city" ref={cityInputRef}/>
      </div>

      <div className={s.actions}>
        <button type='button' onClick={props.onClose}>Close</button>
        <button type='submit' className={s.submit}>Confirm</button>
      </div>

    </form>
  )
}

export default Checkout