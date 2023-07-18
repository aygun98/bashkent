import React from 'react'
import './css/NavbarMobile.css'
import { NavLink } from 'react-router-dom'
import MLogo from './imgs/Logo/logo.png'
import { FaXmark } from 'react-icons/fa6'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoTiktok } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BiLogoYoutube } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'

const NavbarMobile = ({ mobileClose }) => {
    return (

        // <div className='navbar-mobile-container'>
        <nav className='navbar-mobile-center-nav d-flex flex-column  '>
            <div className="navbar-mobile-top d-flex justify-content-between  pt-2 pb-5 align-items-center">
                <div className='navbar-mobile-top-img'><img className='w-100' src={MLogo} alt="" /></div>
                <button onClick={mobileClose}><FaXmark /></button>
            </div>
            <div className="navbar-mobile-center d-flex flex-column justify-content-center align-items-center ">
                <div className="center-links d-flex flex-column justify-content-center align-items-center">
                    <NavLink>Əsas Səhifə</NavLink>
                    <NavLink>Haqqımızda </NavLink>
                    <NavLink>Filiallar</NavLink>
                    <NavLink>Yeməklər</NavLink>
                    <NavLink>Qalereya</NavLink>
                    <NavLink>Menu</NavLink>
                    <NavLink>Rəylər</NavLink>
                    <NavLink>Əlaqə</NavLink>
                </div>
                <button>Rezervasiya</button>
                <div className="icons  ">
                    
                    <span><BiLogoFacebook className='navbar-mobile-center-icon' /></span>
                    <span><BiLogoTiktok className='navbar-mobile-center-icon' /></span>
                    <span><BiLogoLinkedin className='navbar-mobile-center-icon' /></span>
                    <span><BiLogoYoutube className='navbar-mobile-center-icon' /></span>
                    <span><BiLogoInstagram className='navbar-mobile-center-icon' /></span>
                </div>
            </div>

        </nav>
        // </div>


    )
}

export default NavbarMobile