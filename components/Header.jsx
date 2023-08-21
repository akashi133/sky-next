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
          <img src="/images/Logo.png" className={styles.logo} alt="" />
        </Link>
      </div>
      <button onClick={openHandler}><img src="/burgerMenu.png" alt="" /></button>
      <nav className={open? styles.open : styles.close}  onClick={closeHandler}>
        <div className={styles.header_wrapper}>
          <div className={open? styles.open_bg : styles.close_bg}>
            <ul>
              <li><Link href='/'>Главная</Link></li>
              <li><Link href='/parking'>Sky auto parking</Link></li>
              <li><Link href='/elevator'>Sky elevators</Link></li>
              <li><Link href='/news'>Новости</Link></li>
              <li><Link href='/work'>Работа</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header