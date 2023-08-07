import React, { useEffect, useState } from 'react'
import styles from '../styles/Header.module.scss'
import Link from 'next/link'

const Header = () => {
  const [open, setOpen] = useState(false)
  const openHandler = () => {
    setOpen(!open)
    console.log(open);
  }
  const closeHandler = () => {
    setOpen(false)
  }
   return (
    <header className={styles.header}>
      <div>
        <Link href='/'>
          <img src="/images/Logo.png" alt="" />
        </Link>
      </div>
      <button onClick={openHandler}>open</button>
      <nav className={open? styles.open : styles.close}>
        <div className={styles.header_wrapper}>
          <div className={open? styles.open_bg : styles.close_bg}>
            <ul>
              <li onClick={closeHandler}><Link href='/'>Главная</Link></li>
              <li onClick={closeHandler}><Link href='/parking'>Sky auto parking</Link></li>
              <li onClick={closeHandler}><Link href='/elevator'>Sky elevators</Link></li>
              <li onClick={closeHandler}><Link href='/news'>Новости</Link></li>
              <li onClick={closeHandler}><Link href='/work'>Работа</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header