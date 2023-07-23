import React from 'react'
import {AiFillStar} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'

const Star = ({ star }) => {
    const Starrender = () => {
        const doluStar = parseInt(star)
        const bosStar = 5 - doluStar
        const starbox = []

        for (let i = 0; i < doluStar; i++) {
          starbox.push(<AiFillStar className='stars' />)
        }
        for ( let i = 0; i < bosStar; i++) {
          starbox.push(<AiOutlineStar className='stars' />)
        }
        return starbox
    }

    return (
        <div className='reyler-stars-box'>{Starrender()}</div>
    )
}

export default Star