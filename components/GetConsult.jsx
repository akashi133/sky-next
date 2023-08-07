import React from 'react'
import styles from '../styles/Form.module.scss'

const GetConsult = () => {
  return (
    <div className={styles.form}>
          <div className={styles.form_wrapper}>
            <div className={styles.form_wrapper__info}>
              <h3>Получить консультацию от специалиста по подбору лифта</h3>
              <p>Оставьте свой номер телефона, и наш эксперт свяжется с вами в ближайшее время!</p>
            </div>
            <div className={styles.form_wrapper__form}>
              <form action="">
                <div>
                  <input type="text" name="" id="" placeholder='Имя' />
                </div>
                <div>
                  <input type="num" name="" id="" placeholder='+996 555 555 555'/>
                </div>
                <button type='submit'>Получить предложение</button>
              </form>
              <div className={styles.form_wrapper__form_icons}>
                <img src="/images/icons/whatsapp.png" alt="" />
                <img src="/images/icons/Telegram.png" alt="" />
                <img src="/images/icons/viber.png" alt="" />
              </div>
            </div>
          </div>
    </div>
  )
}

export default GetConsult