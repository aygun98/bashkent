import React from 'react'
import design from './imgs/design/rotate.png'
import './css/Title.css'
const Title = ({ title }) => {
    return (
        <div className='title-section'>
            <h1>{title}</h1>
            <div >
                <img  className='w-100' src={design} alt="img" />
            </div>
        </div>
    )
}

export default Title