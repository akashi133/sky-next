import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styles from './Vacancy.module.scss'
import Link from 'next/link'


const Vacancy = () => {
  const [vacancy,setVacancy] = useState({data: null})
  const [selected, SetSelected] = useState('все')
  const getVacancy = async () => {
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
      setVacancy(prevState => ({...prevState, data: resp.data}))
      // console.log(vacancy);
      // console.log(vacancy);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    // console.log(vacancy);
    getVacancy()
  },[])
  
  return (
    <div className={styles.vacancy}>
      <h2>Вакансии Kolesa Group</h2>
      <div className={styles.vacancy_wrapper}>
        {vacancy?.data?.map( (item,index) => (
          <div key={index} className={styles.card}>
            <h3>Junior UX/UI Designer</h3>
            <h4>$ 500 - 1 000</h4>
            <p>Для авиакомпаний. Для поставщиков услуг в странах отдыха. Переводить веб-проекты на новые технологии. Помогать вырабатывать архитектуру решений по задачам.
            Опыт работы в сфере туризма или авиации (онлайн-турагентства, агрегаторы и т.п.)</p>
            <button><Link href={`/work/${item.id}`}><span>Подробнее</span> <img src='/images/icons/arrow_right.png' /></Link></button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Vacancy