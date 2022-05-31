import React from 'react'
import CartIcon from '../../Cart/CartIcon'
import s from "./NavbarCartButton.module.css"

const NavbarCartButton = (props) => {
  return (
    <button className={s["button"]}>
      <span className={s.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={s.badge}>3</span>
    </button>
  )
}

export default NavbarCartButton