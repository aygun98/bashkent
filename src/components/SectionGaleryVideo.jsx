import React, { useContext } from 'react'
import { MainContext} from '../context/MainContextProvider'
import { BsFillPlayFill } from 'react-icons/bs'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

const SectionGaleryVideo = () => {
    const { GaleryVideo } = useContext(MainContext)
    return (
        <div className='galery-section container d-flex flex-wrap  '>
        {
            GaleryVideo.map((video,index)=>(

        <div className="galery-section-cart my-3 " key={index}>
            <div className="img-div w-100 h-100 ">
                <img className='w-100 h-100' src={video} alt="img" />
            </div>
            <div className="hover">
                <a href={video} data-fancybox='' > <BsFillPlayFill className='galery-icon' /></a>
            </div>
        </div>
            ))
        }

    </div>
    )
}

export default SectionGaleryVideo