import React from 'react'
import SideBar from "../components/SideBar"
import Main from '../components/Main'
const Home = () => {
  return (
    <div>
    <div style={{display : "flex", justifyContent : "space-between"}}>
      <div style={{flex : 1}}>
        <SideBar/>
      </div>
      <div style={{flex : 5}}>
        <Main/>
      </div>
      </div>
    </div>
  )
}

export default Home
