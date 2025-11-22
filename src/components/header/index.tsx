'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const images = [
  '/images/hero-1.png',
  '/images/hero-2.webp',
  '/images/hero-3.jpg',
  '/images/hero-4.webp',
]

const Header: React.FC = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full h-screen headerSwiper  "
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div
            className="relative w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Header


