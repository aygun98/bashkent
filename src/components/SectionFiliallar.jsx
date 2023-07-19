import React from 'react'
import './css/SectionFiliallar.css'
import data from '../SectionFiliallar.json'
import Title from './Title'
// import filial1 from './imgs/filial/img-1.png'
// import filial2 from './imgs/filial/img-2.png'
// import filial3 from './imgs/filial/img-3.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const SectionFiliallar = () => {
  return (
    <div className='section-filiallar container py-5 '>
      <Title title='Filiallar' />
  <div>
  <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay]}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
        {
          data.map(filial=>(

            <SwiperSlide>
              <div className="kard" key={filial.id}>
            <div className="kard-img"><img src={filial.img} alt="" /> </div>
            <span>{filial.title}</span></div>
            </SwiperSlide>
          ))
        }
       
      </Swiper>

    

    </div>
    </div>
  )
}

export default SectionFiliallar