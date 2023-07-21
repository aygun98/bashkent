import React from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import './css/SectionBloglar.css'
import data from '../SectionBloglar.json'
import { HiArrowSmRight } from 'react-icons/hi'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const SectionBloglar = () => {
  return (
    <div className='section-bloglar container py-5'>
      <Title title='Bloglar'/>
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
        
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {
          data.map(blog => (
            <SwiperSlide>
             <div className="blog-cart card pb-3">
        <div className="blog-cart-top">
          <div className=""><img className='w-100 h-100' src={blog.img} alt="" /></div>
          <span>{blog.date}</span>
        </div>
        <div className="blog-cart-bottom pt-4 px-3">
          <h2 className=''>{blog.title}</h2>
          <span></span>
          <p className='text-center'>{blog.text.length > 110 ? blog.text.substring(0, 110) + '...' :blog.text}</p>
          <Link > <button>Ətraflı </button> <HiArrowSmRight className='blog-arrow-icon' /></Link>
        </div>

      </div>
            </SwiperSlide>
          ))
        }

      </Swiper>


      {/* <div className="blog-cart card">
        <div className="blog-cart-top">
          <div className=""><img className='w-100' src={img} alt="" /></div>
          <span>21-02-2023</span>
        </div>
        <div className="blog-cart-bottom pt-4 px-3">
          <h2 className=''>Qəhvə haqqında məlumatlar</h2>
          <span></span>
          <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis a aperiam nihil quam tempora, laborum suscipit autem  ...</p>
          <Link> <button>Ətraflı </button> <HiArrowSmRight className='blog-arrow-icon' /></Link>
        </div>

      </div> */}
    </div>
  )
}

export default SectionBloglar