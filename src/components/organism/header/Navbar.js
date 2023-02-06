import React, { useState } from 'react';
import './navbar.css';
import logo from '../../../assets/images/brand.png'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
        <nav className="main-nav">
                <NavLink to="/myCloneFinvu" className='logo'>
                <img src={logo} alt="finvu logo" /></NavLink>
            
            <div className={showMenu?"mobile-menu-link": "menu-link"}>
                <ul>
                        <NavLink to="/products">Products</NavLink>
                        <NavLink to="/solutions">Use Cases</NavLink>
                        <div className="dropdown">Resources 
         
                          <div className="dropdown-content">
                          <NavLink to="#">Learn</NavLink>
                          <NavLink to="#">Blog</NavLink>
                          </div>
                          </div>
                        
                        <NavLink to="#">How It Works</NavLink>
                        <button className="bg-blue raise" type='button' >For Developers</button>
                        <button className="bg-lt-blue raise">
                        Become A Partner
                        </button>
                    </ul>

            </div>
            <div className="hamburger-menu" onClick = {()=>setShowMenu(!showMenu)}>
              <Hamburger />
            </div>
        </nav>
        
    </>
  )
}

export default Navbar