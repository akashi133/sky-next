import React, { useState } from 'react'
import styles from './Video.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import Modal from '../../../../components/Modal';


const Video = ({arr = [1,2,3]}) => {

  const [modalActive, setModalActive] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null)

  const selectedVideoFunc = (item) => {
    setModalActive(true)
    setSelectedVideo(item)
  }
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

              
              <SwiperSlide key={index} className={styles.card} onClick={() => selectedVideoFunc(item)}>
                <img src={item.image} alt="" />
                <p>{item.desc}</p>
              </SwiperSlide>
            ))
          }
          </Swiper>
        </div>
          <Modal active={modalActive} setActive={setModalActive} item={selectedVideo}/>
     </div>
    </div>
  )
}

export default Video