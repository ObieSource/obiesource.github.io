import React, {Fragment, useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='obs__navbar '>
      <div className='obs__navbar-links'>
        <div className='obs__navbar-links_logo'>
          <p><a href = "/">ObieSource</a></p>
        </div>
        <div className='obs__navbar-links_container'>
        <p><a  href="/about">About</a></p>
        <p><a  href="/members">Members</a></p>
        <p><a  href="/contact">Contact</a></p>
        </div>
    </div>
    <div className='obs__navbar-menu'>
      {toggleMenu 
       ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
       : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
      {toggleMenu && (
      <div className='obs__navbar-menu_container'>
        <div className='obs__navbar-menu_container-links'>
        <p><a  href="/about">About</a></p>
        <p><a  href="/members">Members</a></p>
        <p><a  href="/contact">Contact</a></p>
        </div>
        </div>)}
    </div>
  </div>
  )
}


export default Navbar