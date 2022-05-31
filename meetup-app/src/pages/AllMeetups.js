import React, {useState, useEffect} from 'react'
import MeetupList from "../components/meetups/MeetupList"

function AllMeetupsPage() {

  const [isLoading, setIsLoading] = useState(true)
  const [meetups, setMeetups] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch(
      'https://meetup-project-from-udemy-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    )
    .then(response => {
      return response.json()
    })
    .then(data => {
      const meetups = []

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push(meetup)
      }
      
      setIsLoading(false)
      setMeetups(meetups)
    })
  }, [])


  if(isLoading) {
    return (
      <div> 
        Please Wait
      </div>
    )
  }

  return (
    <div>
      <h1>AllMeetupsPage</h1>
      <MeetupList meetups={meetups} />
    </div>
  )
}

export default AllMeetupsPage