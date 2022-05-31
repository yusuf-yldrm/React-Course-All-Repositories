import React from 'react'
import s from "./Modal.module.css"

const Modal = (props) => {
  return (
    <div className={s.modal} onClick={props.close}>
        {props.children}
    </div>
  )
}

export default Modal