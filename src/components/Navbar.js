import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
import Menu from './Menu';


function Navbar() {
  
  
  return (
    <>
        <nav className="navbar">
            <nav className="navbar-container">
                <Menu/>
            </nav>
        </nav>

    </>
  )
}

export default Navbar