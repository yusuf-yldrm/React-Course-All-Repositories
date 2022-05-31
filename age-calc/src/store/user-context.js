import { createContext, useState } from "react";

const UserContext = createContext({
    users: [],
    addUserToList: (user) => {},
    deleteUser: (userId) => {}
})

export function UserContextProvider(props) {

    const [users, setUsers] = useState([])

    const addUserToList = (user) => {
        setUsers(prevValue => prevValue.concat(user))

        console.log(users)
    }

    const deleteUser = (userId) => {
        console.log(userId)
        setUsers(prevValue => {
            const updatedArr = prevValue.filter(user => user.id !== userId)

            return updatedArr
        })
    }


    const context = {
        users: users,
        addUserToList: addUserToList,
        deleteUser: deleteUser
    }

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContext