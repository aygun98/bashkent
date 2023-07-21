import React from 'react'
import './css/SectionPartnerler.css'
import data from '../SectionPartnerler.json'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

const SectionPartnerler = () => {
  return (
    <div className='section-partnerler container py-5'>

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
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
data.map(parner=>(

  <SwiperSlide><div  className='partner-card' key={parner.id}><img className='w-100' src={parner.img} alt="" /></div></SwiperSlide>
))
        }
      
      </Swiper>
    </div>
  )
}

export default SectionPartnerler