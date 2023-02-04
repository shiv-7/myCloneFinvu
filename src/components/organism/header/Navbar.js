import React, { useState } from 'react';
import './navbar.css';
import logo from '../../../assets/images/brand.png'
import Hamburger from 'hamburger-react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  // console.log(showMediaIcon);
  //const v =1;
  return (
    <>
        <nav className="main-nav">
                <NavLink to="/" className='logo'>
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
                        {/* <a href="#">For Developers</a> */}
                        <button className="bg-lt-blue raise">
                        Become A Partner
                        </button>
                        {/* <a href="#">Become A Partner</a> */}
                    </ul>

                  
            </div>
            <div className="hamburger-menu" onClick = {()=>setShowMenu(!showMenu)}>
              <Hamburger />
                   
                   

            </div>

        </nav>
        <body>
        <div></div> 
        </body>
    </>
  )
}

export default Navbar