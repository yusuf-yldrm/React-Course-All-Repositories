import React, { useContext } from 'react'
import UserContext from '../store/user-context'

function UserItem({id, name, age}) {

  const userCtx = useContext(UserContext)

  return (
    <li id={id} onClick={() => userCtx.deleteUser(id)}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </li>
  )
}

export default UserItem