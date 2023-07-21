import React, { useState } from 'react'
import './css/SectionGalery.css'

import SectionGaleryFoto from './SectionGaleryFoto'
import SectionGaleryVideo from './SectionGaleryVideo'

const SectionGalery = () => {
  const [active, setActive] =useState(true)
  const handClick =()=>{
    setActive(!active)
  }
    
  return (
    <div className=' section-galery-conatiner py-5'>
   <div className="container pb-5">
    <button className={active? 'galery-active' : null} onClick={handClick}>Fotolar</button>
    <button  className={active? null : 'galery-active'}  onClick={handClick}>Videolar</button>
   </div>

{
  active? <SectionGaleryFoto/> : <SectionGaleryVideo/>
}
    
    
    </div>
  )
}

export default SectionGalery