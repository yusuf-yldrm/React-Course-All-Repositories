import React, { useContext } from 'react'
import UserItem from "./UserItem"
import UserContext from "../store/user-context"

function UserList() {

  const userCtx = useContext(UserContext)


  return (
    <div>
      <h3>Users</h3>
      <div>
        <ul>
          {userCtx.users.map(user => (
            <UserItem key={user.id} id={user.id} name={user.name} age={user.age} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default UserList