import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './../css/style.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import HeroSlide1 from './heroSlide/HeroSlide1';
import HeroSlide2 from './heroSlide/HeroSlide2';
import HeroSlide3 from './heroSlide/HeroSlide3';

const Hero = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <HeroSlide1></HeroSlide1>
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide2></HeroSlide2>
      </SwiperSlide>
      <SwiperSlide>
        <HeroSlide3></HeroSlide3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
