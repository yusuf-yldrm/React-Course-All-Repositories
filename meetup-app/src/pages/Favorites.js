import React, { useContext } from 'react'
import MeetupItem from '../components/meetups/MeetupItem'
import MeetupList from '../components/meetups/MeetupList'
import FavoritesContext from '../store/favorites-context'

function FavoritesPage() {

  const favoritesCtx = useContext(FavoritesContext)

  if(favoritesCtx.favorites.length === 0) {
    return (
      <h1>Nothing To See Go Add Something</h1>
    )
  }

  return (
    <div>
      <h1>FavoritesPage</h1>
      <MeetupList meetups={favoritesCtx.favorites} />
      {/* IM A IDIOT, JUST LOOK DOWN LINE */}
      {/* { {favoritesCtx.favorites.map(meetup => (
        <MeetupItem address={meetup.address} image={meetup.image} id={meetup.id} key={meetup.id} title={meetup.title} description={meetup.description} />
      ))} } */}
    </div>
  )
}

export default FavoritesPage