'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import { useTranslations } from 'next-intl'

const testimonials = [
  {
    name: "بدر الوهيبي",
    image: "/images/test.png",
    rating: 5,
    message:
      "الحمدلله.. تعاملت مع المكتب وخصوصاً الأخ أمين، ووجدت مرونة وسرعة في الانجاز، وتواصل سلس ومباشر، واخلاق عالية. زادهم الله من فضله.",
  },
  {
    name: "بدر الوهيبي",
    image: "/images/test.png",
    rating: 4,
    message:
      "الحمدلله.. تعاملت مع المكتب وخصوصاً الأخ أمين، ووجدت مرونة وسرعة في الانجاز، وتواصل سلس ومباشر، واخلاق عالية. زادهم الله من فضله.",
  },
  {
    name: "بدر الوهيبي",
    image: "/images/test.png",
    rating: 5,
    message:
      "الحمدلله.. تعاملت مع المكتب وخصوصاً الأخ أمين، ووجدت مرونة وسرعة في الانجاز، وتواصل سلس ومباشر، واخلاق عالية. زادهم الله من فضله.",
  },
]

const TestimonailsSlider = () => {
  const [current, setCurrent] = useState(0)
  const t = useTranslations('testimonails')
  return (
    <div className='lg:w-1/2 w-full'>
<h2 className='font-extrabold lg:text-[23px] text-xl lg:mb-10 mb-5'>
      {t('testimonials_title')}
    </h2>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2800, disableOnInteraction: false }}
        spaceBetween={20}
        loop={true}
        onSlideChange={(swiper) => setCurrent(swiper.realIndex)}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-start gap-2'>
              <Image
                src={item.image}
                alt={item.name}
                width={75}
                height={75}
                className='rounded-full'
              />

              <div className='flex flex-col gap-2'>
                <h2>{item.name}</h2>

                <div className='flex items-center gap-1'>
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className='text-[#ffb90b] text-base' />
                  ))}
                </div>

                <h4 className='mt-1 lg:leading-[30px] leading-[25px] text-sm'>
                  {item.message}
                </h4>

                <div className='mt-5 flex items-center justify-end gap-2'>
                  {testimonials.map((_, i) => (
                    <div
                      key={i}
                      onClick={() => swiper.slideToLoop(i)}
                      className={`w-[9px] h-[9px] rounded-full cursor-pointer ${
                        current === i ? 'bg-[#11459E]' : 'bg-[#D9D9D9]'
                      }`}
                    ></div>
                  ))}
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonailsSlider
