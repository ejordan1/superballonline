import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  var createPostStyle = () => {
    return  {
      height: '150',
      width : '190',
      border : '5px',
       borderStyle : 'solid',
      color : 'brown',
      backgroundColor : 'tan'
    };
  };

  var titleStyle = () => {
    return  {
      
      marginLeft : '200px'
    };
  };

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' style = {titleStyle()} className="brand-logo">SuperBalls</Link>
        <li ><NavLink to='/create'>New Post</NavLink></li>
        {/* <SignedInLinks />
        <SignedOutLinks /> */}
      </div>
    </nav>
  )
}

export default Navbar
