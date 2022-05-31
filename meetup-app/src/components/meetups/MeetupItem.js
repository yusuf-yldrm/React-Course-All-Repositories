import React, {useContext} from 'react'
import FavoritesContext from "../../store/favorites-context"
import s from "./MeetupItem.module.css"
import Card from "../ui/Card"

function MeetupItem(props) {

  const favoritesCtx = useContext(FavoritesContext)
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id)

  const toggleFavoriteStatusHandler= () => {
    console.log(itemIsFavorite)
    if(itemIsFavorite){
      favoritesCtx.removeFavorite(props.id)
      console.log("removed")
    }else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        image: props.image,
        address: props.address,
        description: props.description,
      })
      console.log("added")
    }
  }

  return (
    <li className={s.item}>
      <Card>
        <div className={s.image}>
            <img src={props.image} alt={props.title} />
        </div>
        <div className={s.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={s.actions}>
            <button onClick={toggleFavoriteStatusHandler}>
              {itemIsFavorite ? "Remove From Favorites" : 'Add To Favorites'}
            </button>
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem