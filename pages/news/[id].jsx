import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/News.module.scss'

const NewsDetail = () => {
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
  const router = useRouter()
  const {id} = router.query
  const [vacancy, setVacancy] = useState({})
  console.log(id);
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
    <div className={styles.NewsDetail} key={vacancy.id}>
      <img src="/images/news1.png" alt="" />
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, corrupti?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates facere ullam saepe ad. Incidunt rem laudantium eligendi excepturi natus dignissimos voluptates similique quasi, error adipisci sint. Sequi quibusdam magnam ratione ipsam tempora atque excepturi corrupti? Quibusdam autem fuga ea quod, iusto nisi perferendis non eligendi illo sit unde deserunt.</p>

      <img src="/images/news1.png" alt="" />
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, corrupti?</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis voluptates facere ullam saepe ad. Incidunt rem laudantium eligendi excepturi natus dignissimos voluptates similique quasi, error adipisci sint. Sequi quibusdam magnam ratione ipsam tempora atque excepturi corrupti? Quibusdam autem fuga ea quod, iusto nisi perferendis non eligendi illo sit unde deserunt.</p>
    </div>
  )
}

export default NewsDetail