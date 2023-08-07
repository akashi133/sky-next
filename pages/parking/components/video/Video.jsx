import React from 'react'
import styles from './Video.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";


const Video = ({arr}) => {
  return (
    <div className={styles.video}>
     <div className={styles.video_wrapper}>
     <h2>Изображения и видео</h2>
        <div className={styles.video_wrapper__cards}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[FreeMode, Pagination]}
            className={styles.mySwiper}
          >
          {
            arr.map((item,index) => (
              <SwiperSlide key={index} className={styles.card}>
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
              </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
     </div>
    </div>
  )
}

export default Video