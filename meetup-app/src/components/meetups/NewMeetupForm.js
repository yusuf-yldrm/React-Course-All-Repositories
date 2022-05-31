import React, {useRef} from 'react'
import Card from '../ui/Card'
import s from "./NewMeetupForm.module.css"

let lipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

function NewMeetupForm(props) {

    const titleRef = useRef()
    const imageRef = useRef()
    const addressRef = useRef()
    const descriptionRef = useRef()

    const submitHandler = (e) => {
        e.preventDefault()

        const enteredTitle = titleRef.current.value
        const enteredImage = imageRef.current.value
        const enteredAddress = addressRef.current.value
        const enteredDescription = descriptionRef.current.value

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.addMeetup(meetupData)
    }

    return (
        <Card>
            <form className={s.form} onSubmit={submitHandler}>
                <div className={s.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type="text" required id='title' ref={titleRef} defaultValue="California" />
                </div>
                <div className={s.control}>
                    <label htmlFor='title'>Meetup Image</label>
                    <input type="url" required id='image' ref={imageRef} defaultValue="https://i.natgeofe.com/k/5af79b71-007d-46f8-8efe-bf37a504195b/california-golden-gate-bridge.jpg" />
                </div>
                <div className={s.control}>
                    <label htmlFor='title'>Meetup Address</label>
                    <input type="text" required id='address' ref={addressRef} defaultValue="119 East Shipley Court San Jose, CA 95123" />
                </div>
                <div className={s.control}>
                    <label htmlFor='title'>Meetup Description</label>
                    <textarea required id='description' rows="5" ref={descriptionRef} defaultValue={lipsum}>
                    </textarea>
                </div>
                <div className={s.actions}>
                    <button type="submit">Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm