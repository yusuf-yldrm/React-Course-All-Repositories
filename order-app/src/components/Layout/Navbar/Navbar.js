import React from 'react'
import s from "./Navbar.module.css"
import Button from '../../UI/Button'
import mealImage from "../../../assets/images/meals.jpg"
import NavbarCartButton from './NavbarCartButton'

const Navbar = (props) => {

  const cartHandler = () => {
    console.log("cart opened")
  }


  return (
    <>
      <div className={s.navbar}>
          <div>
              <h1>Osman Restoran</h1>
          </div>

          <div>
              <NavbarCartButton onClick={cartHandler}>Your Cart</NavbarCartButton>
          </div>
      </div>
      <div className={s["main-image"]}>
        <img src={mealImage} alt='' />
      </div>
    </>
  )
}

export default Navbar