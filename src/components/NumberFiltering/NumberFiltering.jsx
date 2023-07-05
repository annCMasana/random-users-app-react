import React,{useState} from 'react'
import "./NumberFiltering.css"

const NumberFiltering = ({getUsersbyNumber}) => {

    return (
        <select onChange={(e) => getUsersbyNumber(e.target.value)}>
            <option selected disabled>Select # of Users</option>
            <option value="50">All</option>
            <option value="30">30</option>
            <option value="20">20</option>
            <option value="10">10</option>
            <option value="5">5</option>
        </select>
      )
    }

export default NumberFiltering