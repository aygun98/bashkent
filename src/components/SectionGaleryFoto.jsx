import React, { useContext } from 'react'

import { BiSearch } from 'react-icons/bi'
import { MainContext } from '../context/MainContextProvider'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


const SectionGaleryFoto = () => {
    const { GaleryFoto } = useContext(MainContext)
    return (
        <div className='galery-section container d-flex flex-wrap  '>
            {
                GaleryFoto.map((foto,index)=>(

            <div className="galery-section-cart my-2 " key={index}>
                <div className="img-div w-100 h-100 ">
                    <img className='w-100 h-100' src={foto} alt="img" />
                </div>
                <div className="hover">
                    <a href={foto} data-fancybox='' > <BiSearch className='galery-icon' /></a>
                </div>
            </div>
                ))
            }

        </div>
    )
}

export default SectionGaleryFoto