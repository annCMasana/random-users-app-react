import React from 'react'
import './UserCard.css'

const UserCard = ({name,location,email,login,phone,picture}) => {
  return (
    <div className='card'>
        <img src={picture.large} alt="" />
        <div className='info'>
            <p>Name: {name && name.first + " " + name.last}</p>
            <p>Username: {login && login.username}</p>
            <p>Email: {email && email}</p>
            <p>Address: {location && location.city + " " + location.state + " " + location.country + " " + location.postcode}</p>
            <p>Contact #: {phone && phone}</p>
        </div>
    </div>
  )
}

export default UserCard