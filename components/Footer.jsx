import React from 'react'
import styles from '../styles/Footer.module.scss'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_wrapper__form}>
          <h3>Остались вопросы ?</h3>
          <form action="">
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Имя' />
            <input type="text" placeholder='Вопрос' />
            <div className={styles.form_checkbox}>
              <input type="checkbox" name="" id="checkbox" />
              <label htmlFor="checkbox">Даю согласие на обработку <span>Персональных данных</span></label>
            </div>
            <button>Оставить заявку</button>
          </form>
        </div>
        <div className={styles.footer_wrapper__info}>
          <div className={styles.footer_wrapper__info_left}>
            <div>
              <h3>Контакты</h3>
              <ul>
                <li>
                  <a href="">+996 755 18 88 97 - Экспорт</a>
                </li>
                <li>
                  <a href="">+996 990 11 22 12 - Коммерческий директор</a>
                </li>
              </ul>
            </div>
            <div>
              <h3>Адрес</h3>
              <ul>
                <li>Завод : Кыргызская республика, C. Ленинская</li>
                <li>Офис: Кыргизская республика Г.Бишкек ул. Курманжан Датка 144</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_wrapper__info_right}>
            <div>
              <h3>Соцсети</h3>
              <ul>
                <li><a href="">Telegram</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">Pinterest</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer