import React from 'react'
import './css/NiyeBiz.css'
import Title from './Title'
import design1 from './imgs/About/small-img/img-1.png'
import design2 from './imgs/About/small-img/img-2.png'
import design3 from './imgs/About/small-img/img-3.png'
const NiyeBiz = () => {
    return (
        <div className='niyebiz-section container py-4'>
            <Title title='Niyə biz?' />
            <div className='kards d-flex align-items-center justify-content-between flex-md-column flex-lg-row flex-column'>
                <div className="kard  ">
                    <div><img src={design1} alt="" /></div>
                    <p>Ürəkaçan məkan</p>
                </div>
                <div className="kard">
                    <div><img src={design2} alt="" /></div>
                    <p>Dadlı yeməklər</p>
                </div>
                <div className="kard">
                    <div><img src={design3} alt="" /></div>
                    <p>Gülərüz xidmət</p>
                </div>
            </div>
        </div>
    )
}

export default NiyeBiz