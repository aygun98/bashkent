import React from 'react'
import './css/SearchSection.css'
import { BiSearchAlt } from 'react-icons/bi'

const SearchSection = () => {
    return (
       
            <div className='search-section ' >
                <div className='d-flex'>
                    <input type="text" />
                    <button><BiSearchAlt className='search-section-icon' /></button>
                </div>

            </div>
      
    )
}

export default SearchSection