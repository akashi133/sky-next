import React, { useEffect, useState } from 'react'
import styles from '../../styles/News.module.scss'
import Link from 'next/link'
import axios from 'axios'

const News = () => {
  const [news,setNews] = useState({data: null})
  const [loading,setLoading] = useState()
  
  
  const getNews = async () => {
    try {
      const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
      setNews(prevState => ({...prevState, data: resp.data}))
    } catch (error) {
      console.error(error)
    }
  }
  console.log(news);

  useEffect(() => {
    getNews()
  },[])
  if (loading) {
    return (
      <div>loading...</div>
    )
  }

  return (
    <div className={styles.newsPage}>
      <h1>Самые актуальные новости </h1>
      <section className={styles.newsPage_wrapper}>
        {
          news?.data?.map((item, index) => (
            <Link href={`/news/${item.id}`} key={item.id}>
            <div className={styles.news}>
              <img src="/images/news1.png" alt="" />
              <div className={styles.news_info}>
                <h3>Производство лифтов в КР в первом квартале 2023 года выросло на 4,6</h3>
                <p>Продукция не уступает по качеству импортным аналогам, но стоит значительно дешевле, сообщается на официальном сайте Мэра Москвы. Инженеры АО «Мослифт» начали выпускать комплектующие</p>
                <div className={styles.news_info_bottom}>
                  <span>22.06.23</span>
                  <img src="/images/icons/arrow.png" alt="" />
                </div>
              </div>
            </div>
            </Link>
          ))
        }
      </section>      
    </div>
  )
}

export default News