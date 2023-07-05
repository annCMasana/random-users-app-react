import React,{useState} from 'react'
import "./GenderFiltering.css"

const GenderFiltering = ({getUsersbyGender}) => {

  return (
    <select onChange={(e) => getUsersbyGender(e.target.value)}>
        <option selected disabled>All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
  )
}

export default GenderFiltering