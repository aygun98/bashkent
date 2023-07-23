import React from 'react'
import './css/ReylerCards.css'
import Star from './Star'
const ReylerCards = ({ rey }) => {
    return (
        <div className="reyler-cards pt-4" >
            <div className="reyler-card-top">
                <div className="img"><img className='w-100 h-100' src={rey.user_img} alt="" /></div>
               <span><Star star={rey.star} /></span>
            </div>
            <div className="reyler-text">
                <p>{rey.text}</p>
            </div>

        </div>
    )
}

export default ReylerCards