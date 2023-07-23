import React, { useContext } from 'react'
import './css/SectionReyler.css'
import Title from './Title'
import ReylerCards from './ReylerCards'
import { MainContext } from '../context/MainContextProvider'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const SectionReyler = () => {
    const { commentData } = useContext(MainContext)
    return (
        <div className='section-reyler container py-5'>
            <Title title='Müştəri Rəyləri'  />

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    250: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    }

                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {

                    commentData.map(rey => (

                        <SwiperSlide className='reyler-slide'>
                            <ReylerCards key={rey.id} rey={rey} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}

export default SectionReyler