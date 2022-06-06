import { useState, useRef } from 'react'
import s from './Checkout.module.css'

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;


const Checkout = (props) => {

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true
  })

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


    setFormInputValidity({
      name: enteredNameIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
      street: enteredStreetIsValid
    })


    const formIsValid =
    enteredNameIsValid &&
    enteredStreetIsValid &&
    enteredCityIsValid &&
    enteredPostalCodeIsValid;

    if(!formIsValid) {
      return
    }

    console.log("send data to db")
    props.onConfirm({
      name: enteredName,
      city: enteredCity,
      postalCode: enteredPostalCode,
      street: enteredStreet
    })
  }

  return (
    <form onSubmit={formSubmitHandler} className={s.form}>
      <div className={s.control}>
        <label htmlFor='name'>Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
         {!formInputValidity.name && <p className={s.invalid}>Please Enter Valid Name</p>}
      </div>
      <div className={s.control}>
        <label htmlFor='street'>Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputValidity.street && <p className={s.invalid}>Please Enter Valid Street</p>}
      </div>

      <div className={s.control}>
        <label htmlFor='postalCode'>Postal Code</label>
        <input type="text" id="postalCode" ref={postalCodeInputRef}/>
        {!formInputValidity.postalCode && <p className={s.invalid}>Postal Code need 5 Character</p>}
      </div>

      <div className={s.control}>
        <label htmlFor='city'>City</label>
        <input type="text" id="city" ref={cityInputRef}/>
        {!formInputValidity.city && <p className={s.invalid}>Please Enter Valid City</p>}
      </div>

      <div className={s.actions}>
        <button type='button' onClick={props.onClose}>Close</button>
        <button type='submit' className={s.submit} disabled={!props.isHasItems}>Confirm</button>
      </div>

    </form>
  )
}

export default Checkout