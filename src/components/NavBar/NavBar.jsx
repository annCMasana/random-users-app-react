import React from 'react'
import GenderFiltering from '../GenderFiltering/GenderFiltering'
import NumberFiltering from '../NumberFiltering/NumberFiltering'
import './NavBar.css'

const Navbar = ({getUsersbyNumber,getUsersbyGender}) => {
  return (
    <div className='navbar'>
        <NumberFiltering getUsersbyNumber={getUsersbyNumber}/>
        <GenderFiltering getUsersbyGender={getUsersbyGender}/>
    </div>
  )
}

export default Navbar