import React from 'react';
import logo from '../../img/PRO.png'
// Footer of website 
const Footer = () => {
    return (
        <div className='bg-dark text-center text-white p-2 mt-4'>
            <img src={logo} style={{height:'100px',width:'100px'}} alt="" />
            <h3 className='p-1'>Copyright © 2022 All Right Reserved</h3>
            <h4>PRO Coding Academy</h4>
        </div>
    );
};

export default Footer;