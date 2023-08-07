import React from 'react'
import styles from '../styles/AboutProduct.module.scss'

const AboutProduct = () => {
  return (
    <div className='content'>
      <section className={styles.aboutProduct} >
        {/* <section>

        </section> */}
          <h2>Подробнее о наших продуктах</h2>
          <div className={styles.aboutProduct_wrapper}>
            <div className={styles.left_block}></div>
            <div className={styles.right_block}>
              <div className={styles.right_block_item}>
                <img src="/images/skyElevators.png" alt="" />
                <div className={styles.right_block_item_info}>
                  <h3>Sky elevators</h3>
                  <p>SKY Industrial Group — ведущий поставщик автоматических парковочных систем. Компания установила системы в различных странах мира. Системы SKY Industrial Group известны своим качеством, производительностью и надежностью.</p>
                  <button>Подробнее</button>
                </div>
              </div>
              <div className={styles.right_block_item}>
                <img src="/images/skyParking.png" alt="" />
                <div className={styles.right_block_item_info}>
                  <h3>Sky auto parking</h3>
                  <p>SKY Industrial Group — ведущий поставщик автоматических парковочных систем. Компания установила системы в различных странах мира. Системы SKY Industrial Group известны своим качеством, производительностью и надежностью.</p>
                  <button>Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default AboutProduct