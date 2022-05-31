import React from 'react'
import s from "./Card.module.css"

function Card(props) {
  return (
    <div className={s.card}>
        {props.children}
    </div>
  )
}

export default Card