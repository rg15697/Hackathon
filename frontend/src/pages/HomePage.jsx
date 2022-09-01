import React from 'react'
import {NavLink} from "react-router-dom"

const HomePage = () => {
  return (
    <div>
        <h1>HomePage</h1>
        <NavLink to="/signup" >Sign Up</NavLink>
        <NavLink to="/signin" >Sign Up</NavLink>
    </div>
  )
}

export default HomePage