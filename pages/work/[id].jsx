import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/VacancyDetail.module.scss'

const Detail = () => {
  const arr = [
    "Поиск агентств недвижимости, застройщиков/девелоперов, развитие и поддержка долгосрочных отношений с ними;",
    "Проведение переговоров, презентаций и заключение договоров;",
    "Мониторинг качества работы и оценка сервиса партнеров;",
    "Проведение интервью и обучения для новых партнеров;",
    "Выполнение плана продаж;",
    "Оптимальное распределение входящего потока лидов среди партнеров;",
    "Проведение отчетных встреч с партнерами."
  ]
  const skills = [
    "Ведение переговоров",
    "Проведение презентаций",
    "Поиск и привлечение клиентов",
    "Заключение договоров",
    "Деловая переписка",
  ]
  const [vacancy, setVacancy] = useState({})
  const router = useRouter()
  const {id} = router.query
  const getVacancy = async () => {
    try {
      const resp = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      setVacancy(resp.data);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getVacancy()
  },[])
  return (
    <div className={styles.vacancyDetail}>
      <div className={styles.vacancyDetail__name}>
        <h1>{vacancy.name}</h1>
        <h2>{vacancy.phone}</h2>
        <button>Откликнуться</button>
      </div>
      <div className={styles.vacancyDetail__info}>
        <div>
          <h2>Тебе предстоит</h2>
          <ul>
            {
              arr?.map((item, index) => (
                <li key={index}>{item}</li>
              ))
            }
          </ul>
        </div>
        <div>
          <h2>Ключевые навыки</h2>
          <div>
            {
              skills?.map((item,index) => (
                <p key={index}>{item}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail