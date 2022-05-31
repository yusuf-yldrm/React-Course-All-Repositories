import React, { useContext } from 'react'
import favoritesContext from "../../store/favorites-context"
import s from "./MainNavigation.module.css"
import { Link } from 'react-router-dom'

function MainNavigation() {

    const favoritesCtx = useContext(favoritesContext)
        

    return (
        <header className={s.header}>
            <div className={s.logo}>
                ReactMeetups
            </div>
            <nav className={s.navbar}>
                <ul className={s["nav-list"]}>
                    <li>
                        <Link to="/">All Meetups</Link>
                    </li>
                    <li>
                        <Link to="/new-meetup">New Meetup</Link>
                        
                    </li>
                    <li>
                        <Link to="/favorites">Favorites {favoritesCtx.totalFavorites}</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation