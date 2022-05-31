import React from 'react'
import MeetupItem from './MeetupItem'
import s from "./MeetupList.module.css"

function MeetupList(props) {
  return (
    <ul className={s.list}>
      {props.meetups.map(meetup => (
        <MeetupItem 
          key={meetup.id} 
          id={meetup.id}
          image={meetup.image} 
          address={meetup.address} 
          title={meetup.title} 
          description={meetup.description} 
        />
      ))}

    </ul>
  )
}

export default MeetupList