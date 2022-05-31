import React from 'react'
import MainNavigation from "../Layout/MainNavigation" 
import s from "./Layout.module.css"

function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={s.main}>
        {props.children}
      </main>
    </div>
  )
}

export default Layout