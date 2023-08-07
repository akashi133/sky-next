import React from 'react'
import styles from './FormResume.module.scss'


const FormResume = () => {
  return (
    <div className={styles.formResume}>
      <div className={styles.formResume_form}>
        <form>
          <input type="text" placeholder='Имя Фамилия '/>
          <input type="number" placeholder='Телефон '/>
          <input type="email" placeholder='E-maill'/>
          <input type="text" placeholder='Название профессии'/>
          <textarea cols="30" rows="10" placeholder='Комментарий (необязательно)'></textarea>
          <div className={styles.buttons}>
            <button>Загрузить резюме </button>
            <button>Откликнуться</button>
          </div>
        </form>
        <p>Нажимая {"Откликнуться"} ты соглашаешься с Обработкой персональных данных</p>
      </div>
      <div className={styles.formResume_text}>
        <h2>Не видишь свою вакансию?</h2>
        <p>Оставь свои данные и резюме, и мы свяжемся с тобой, когда найдем что-то подходящее под твое резюме</p>
      </div>
    </div>
  )
}

export default FormResume