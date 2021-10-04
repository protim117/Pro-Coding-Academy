import React from 'react';
import './Header.css'
import logo from '../../img/PRO.png'
import {Link} from 'react-router-dom'

const Header = () => {

//    using custom style 
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: 'white',
  padding:'20px',
};
    return (
        <div className='d-flex bg-dark justify-content-between' >
            {/* Logo  */}
            <div className=''>
                <img className="logo" src={logo} alt="" />
            </div>
            <div>
                {/* NaLInks  */}
                <nav  className="d-flex align-items-center ">
                <Link to='/home' style={linkStyle}>Home</Link>
                <Link to='/services'style={linkStyle}>Services</Link>
                <Link to='/aboutus'style={linkStyle}>About Us</Link>
                <Link to='/contactus'style={linkStyle}>Contact Us</Link>
                </nav>
            </div>
             
        </div>
    );
};

export default Header;