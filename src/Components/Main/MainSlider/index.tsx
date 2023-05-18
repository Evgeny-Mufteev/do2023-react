import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

import styles from './MainSlider.module.scss';
import 'swiper/css';
import './styles.css';

const images = [
  'photogallery1.jpg',
  'photogallery2.jpg',
  'photogallery3.jpg',
  'photogallery4.jpg',
];

export const MainSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={2.6}
        spaceBetween={30}
        loop={true}
        speed={15000}
        autoplay={{

          delay: 0,
          disableOnInteraction: true,
        }}
        breakpoints={{
          319: {
            spaceBetween: 12,
            slidesPerView: 1,
          },
          374: {
            spaceBetween: 12,
            slidesPerView: 1.2,
          },
          479: {
            spaceBetween: 24,
            slidesPerView: 1.3,
          },
          767: {
            spaceBetween: 24,
            slidesPerView: 2.3,
          },
          1023: {
            spaceBetween: 40,
            slidesPerView: 1.9,
          },
          1349: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1800: {
            slidesPerView: 2.6,
            spaceBetween: 40,
          },
        }}
        modules={[Autoplay]}
        className={styles.mySwiper}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img className={styles.img__item} src={`/img/sliderMain/${image}`} alt={`${image}${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
