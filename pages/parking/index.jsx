import React from 'react'
import styles from '../../styles/Parking.module.scss'
import GetConsult from '../../components/GetConsult'
import AboutProduct from '../../components/AboutProduct'
import Video from './components/video/Video'
import AccordionBlock from './components/accordion/AccordionBlock'

// data of parking//
import { power, power_techData, sopra, sopra_techData, sopraSeries, sopraSeries_techData } from '../../components/data'

const Parking = () => {

  let arr = [
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    },
    {
      image: "images/parking/video.png",
      desc: "Идеальная парковка с минимальными усилиями"
    }
  ]
  return (
    <div className={styles.parking}>
      <div className={styles.parking_main}>
        <div className={styles.parking_main__wrapper}>
          <div>
            <img src="/images/parking/main_left.png" alt="" />
            {/* <p>Идеальная парковка с минимальными усилиями</p> */}
          </div>
          <div>
            <img src="/images/parking/main_mid.png" alt="" />
            {/* <p>Передовые технологии</p> */}
          </div>
          <div>
            <img src="/images/parking/main_right.png" alt="" />
            {/* <p>Идеальная парковка с минимальными усилиями</p> */}
          </div>
          <div className={styles.main_heading}>
            <h1>SKY Auto Parking.</h1>
            <i>Идеальная парковка без усилий</i>
          </div>
        </div>
      </div>
      <Video arr={arr} />
      <div className={styles.autoParking}>
        <div className={styles.autoParking__wrapper}>
          <div className={styles.autoParking__wrapper__top}>
            <h2>SKY Industrial Group Auto Parking</h2>
            <p>SKY Industrial Group Auto Parking предлагает передовые технологии автоматической парковки, которые облегчают и упрощают процесс парковки автомобиля</p>
          </div>
          <div>
            <img src="/images/parking/autoPark_top.png" alt="" />
          </div>
          <div>
            <img src="/images/parking/autoPark_bottom.png" alt="" />
          </div>
          <div className={styles.autoParking__wrapper__bottom}>
            <h2>Auto Parking: удобная и точная парковка автомобилей</h2>
            <p>Передовая система автоматической парковки для удобства и безопасности. Инновационные технологии и высокоточные сенсоры обеспечивают точное и эффективное размещение автомобилей.</p>
          </div>
        </div>
      </div>
      {/* <AccordionBlock /> */}
      <div className={styles.benefits}>
        <h2>Преимущества</h2>

        <div className={styles.benefits_wrapper}>
          <div className={styles.benefits_wrapper__card}>
            <span>01</span>
            <div className={styles.benefits_wrapper__card_info}>
            <h3>Удобство:</h3>
            <ul>
              <li>Парковка без маневрирования и поиска места: Система Auto Parking позволяет водителям осуществлять парковку без необходимости маневрирования или траты времени на поиск подходящего места.</li>
              <li>Автоматический процесс парковки: Просто активируйте систему, и она самостоятельно возьмет на себя процесс парковки.</li>
            </ul>
            </div>
          </div>
        </div>

        <div className={styles.benefits_wrapper}>
          <div className={styles.benefits_wrapper__card}>
            <span>02</span>
            <div className={styles.benefits_wrapper__card_info}>
              <h3>Безопасность:</h3>
              <ul>
                <li>Различные системы безопасности: SKY Industrial Group Auto Parking оснащена различными системами безопасности, включая датчики препятствий, системы контроля движения и аварийные механизмы.</li>
                <li>Защита автомобиля: Система обеспечивает защиту автомобиля и предотвращает возможные аварийные ситуации.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.benefits_wrapper}>
          <div className={styles.benefits_wrapper__card}>
            <span>03</span>
            <div className={styles.benefits_wrapper__card_info}>
              <h3>Высокая точность:</h3>
              <ul>
                <li>Различные системы безопасности: SKY Industrial Group Auto Parking оснащена различными системами безопасности, включая датчики препятствий, системы контроля движения и аварийные механизмы.</li>
                <li>Защита автомобиля: Система обеспечивает защиту автомобиля и предотвращает возможные аварийные ситуации.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.benefits_wrapper}>
          <div className={styles.benefits_wrapper__card}>
            <span>04</span>
            <div className={styles.benefits_wrapper__card_info}>
            <h3>Простая и удобная эксплуатация:</h3>
            <ul>
              <li>Интуитивный интерфейс: Система Auto Parking имеет простой и понятный интерфейс, что делает ее использование легким и удобным.</li>
              <li>Мгновенное включение и выключение: Вы можете активировать и деактивировать систему Auto Parking мгновенно, что позволяет вам выбирать, когда использовать эту функцию.</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
      <AccordionBlock arr={sopra} obj={sopra_techData} />
      <AccordionBlock arr={power} obj={power_techData} />
      <AccordionBlock arr={sopraSeries} obj={sopraSeries_techData} />
      
      <GetConsult />
      <AboutProduct />
    </div>
  )
}

export default Parking