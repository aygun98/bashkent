import React from 'react'
import './css/SectionMenu.css'
import data from '../HomeMenu.json'

const SectionMenu = () => {
    return (
        <div className='section-menu px-2 py-5 row'>
            {
                data.map(food => (
                    <div className="kard-container col-md-6 col-lg-4" key={food.id} >
                        <div className="div-img"><img className='w-100' src={food.img} alt="" /></div>
                        <div className='hover'>
                            <span>{food.title}</span>

                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default SectionMenu