import React, { useRef, useContext} from 'react'
import UserContext from "../store/user-context"

function UserForm(props) {

  const nameRef = useRef()
  const ageRef = useRef()
  const UserCtx = useContext(UserContext)

  const submitHandler = (e) => {
    e.preventDefault()

    const user = {
      id: Math.random(),
      name: nameRef.current.value,
      age: ageRef.current.value
    }

    UserCtx.addUserToList(user)
    // props.addUserToList(user)
  }


  return (
    <form onSubmit={submitHandler}>

      <input type="text" ref={nameRef} defaultValue="jonh doe"  />
      <input type="number" ref={ageRef} defaultValue={20} />


      <button type='submit'>Add Person</button>
    </form>
  )
}

export default UserForm