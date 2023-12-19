import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import './Styles.css';
import HomeIcon from '@mui/icons-material/Home';

export default function Navbar(){
  
  
  return (
      <nav className="navbar">
          <div  className='nav'>
            <Link to='/'  className='navbarLink'><HomeIcon></HomeIcon>Home</Link>
            <Link to= '/Add trip'   className='navbarLink' ><AddIcon></AddIcon>Add trip</Link>
            <Link to='Search' className='navbarLink'><SearchIcon></SearchIcon>Search</Link>
        </div>
        <div className='appTitle'>Our trips</div>

      </nav>

  );
}