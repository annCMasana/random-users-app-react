import React from 'react'
import UserCard from '../UserCard/UserCard'
import './UsersList.css'

const UsersList = ({users}) => {
  return (
    <main>
        {
          !users.length > 0 ? "No Users Available" :
          users.map((user,i)=>(
            <UserCard key={i}{...user}/>
          ))
        }
    </main>
  )
}

export default UsersList