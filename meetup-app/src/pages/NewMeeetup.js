import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'
import {useHistory} from "react-router-dom"

function NewMeeetupPage() {
  
  const  history = useHistory()

  const addMeetupHandler = (meetupData) => {

    fetch(
      'https://meetup-project-from-udemy-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    })
  }

  return (
    <div>
      <h1>Add New Meetup</h1>
      <NewMeetupForm addMeetup={addMeetupHandler} />
    </div>
  )
}

export default NewMeeetupPage