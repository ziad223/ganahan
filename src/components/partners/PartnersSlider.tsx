'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Partner {
  id: number;
  image: string;
}

const PartnersSlider = ({ partners }: { partners: Partner[] }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      slidesPerView={2}
      breakpoints={{
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      className="!flex items-center w-full"
    >
      {partners.map((partner) => (
        <SwiperSlide
          key={partner.id}
          className="lg:flex hidden  items-center "
        >
          <img
            src={partner.image}
            alt={`Partner ${partner.id}`}
            className="max-w-[160px] min-h-[160px] max-h-[160px] rounded-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PartnersSlider;
