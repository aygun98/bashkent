import React from 'react'
import './css/Navbar.css'
import {FaBars}  from 'react-icons/fa'
import { BiSearchAlt } from 'react-icons/bi'
import { BiLogoFacebook } from 'react-icons/bi'
import { BiLogoTiktok } from 'react-icons/bi'
import { BiLogoLinkedin } from 'react-icons/bi'
import { BiLogoYoutube } from 'react-icons/bi'
import { BiLogoInstagram } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import Logo from './imgs/Logo/logo.png'


const Navbar = ({searchmenuOpen, setMobileMenuOpen, fixed}) => {
    return (
        // <nav className={`navbar-container`}>
        <>
            <nav className={`navbar-top-container ${fixed? 'fixed-top' :'navbar-top-container-relative'} `}>
                <div className="nabvar-top d-flex  container justify-content-between align-items-center">
                   <button className='navbar-mobil-fabars-icon' onClick={setMobileMenuOpen}><FaBars/></button>
                    <Link to=''><button>Rezervasiya</button></Link>
                    <Link className='logo-div' to=""><img className='w-100' src={Logo} alt="" /></Link>
                    <div className=" d-flex flex-column ">
                        <div className='navbar-top-icons  mb-2'>
                            <span><BiLogoFacebook className='navbar-top-icon' /></span>
                            <span><BiLogoTiktok className='navbar-top-icon' /></span>
                            <span><BiLogoLinkedin className='navbar-top-icon' /></span>
                            <span><BiLogoYoutube className='navbar-top-icon' /></span>
                            <span><BiLogoInstagram className='navbar-top-icon' /></span>

                        </div>
                        <div className='navbar-search d-flex align-items-baseline'>
                            <input type="text" />
                            <BiSearchAlt className='navbar-bottom-icon' />
                        </div>
                    </div>
                    <button className='navbar-mobil-search-icon'  onClick={searchmenuOpen}><BiSearchAlt /></button> 
                </div>
            </nav>
           <div className={`nabvar-bottom  ${fixed ? 'fixed-top ' :' nabvar-bottom-relative'}`}>
            <nav className='container d-flex justify-content-between '>
                <Link className={`${fixed? "fixed-logo" :'fixed-logo-display'}`}><img  className='w-100' src={Logo} alt="" /></Link>
                <NavLink style={{minWidth:120}}>Əsas Səhifə</NavLink>
                <NavLink to='Anaseyfe'>Haqqımızda </NavLink>
                <NavLink>Filiallar</NavLink>
                <NavLink>Yeməklər</NavLink>
                <NavLink>Qalereya</NavLink>
                <NavLink>Menu</NavLink>
                <NavLink>Rəylər</NavLink>
                <NavLink>Əlaqə</NavLink>
            </nav>
            </div>
            </>
        // </nav>
    )
}

export default Navbar