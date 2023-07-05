import { useState,useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import UsersList from './components/UsersList/UsersList'
import NavBar from './components/NavBar/NavBar'
import { BASE_URL } from './utils/api'


function App() {

  const [users,setUsers] = useState([])

  useEffect(() =>{
    getUsers()
  },[])

  const getUsers = async () => {
    const res = await fetch(`${BASE_URL}?results=50`)
    const data = await res.json()
    setUsers(data.results)
  }

  const getUsersbyNumber = async (results) => {
    const res = await fetch(`${BASE_URL}?results=${results}`)
    const data = await res.json()
    setUsers(data.results)
  }

  const getUsersbyGender =  async (gender) => {
    const res = await fetch(`${BASE_URL}?gender=${gender}&results=50`)
    const data = await res.json()
    setUsers(data.results)
  }
  

  return (
    <div className="App">
      <Header/>
      <NavBar getUsersbyNumber={getUsersbyNumber} 
              getUsersbyGender={getUsersbyGender}/>
      <UsersList users={users}/>
    </div>
  )
}

export default App
