import React, { useEffect, useState } from 'react'
import './css/Header.css'
import Navbar from './Navbar'
import HeaderCenter from './HeaderCenter'
import NavbarMobile from './NavbarMobile'
import SearchSection from './SearchSection'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();
    useEffect(() => {
        if(location.pathname === '/'){
            // alert('ana sehife')
        }else{
            // alert('diger sehife')
        }
    }, [location.pathname])

    //searc menu ac
    const [searchOpen , setSearchOpen] =useState(false)
    const searchmenuOpen =()=>{
      setSearchOpen(true)
    }
    const [mobileMenuOpen, setMobileMenuOpen]= useState(false)
    const mobileOpen =()=>{
      setMobileMenuOpen(true)
    }
    const mobileClose =()=>{
      setMobileMenuOpen(false)
    }
//scroll
 //    //scroll
 const [fixed, setFixed] = useState(false)
 //scroll
 window.addEventListener('scroll', () => {
   if (window.scrollY > 200) {
     setFixed(true)
   } else {
     setFixed(false)
   }
 })
  return (
    <div className='header-container'>
        <Navbar fixed={fixed} searchmenuOpen={searchmenuOpen} setMobileMenuOpen={mobileOpen}/>
        <HeaderCenter/>
        <div className={`bg-search-section ${searchOpen? 'search-active' : ''}  d-flex align-items-center justify-content-center `} onClick={()=>(setSearchOpen(false))}>
       <SearchSection/>
       </div>
       <div className={`bg-navbar-mobile ${mobileMenuOpen? 'bg-mobile-aktive' : ''}`} onClick={mobileClose} ></div>
       <div className={` navbar-mobile-container ${mobileMenuOpen? 'mobile-aktive' : '' }`}>
       <NavbarMobile mobileClose={mobileClose}/>
       </div>
      
    </div>
  )
}

export default Header