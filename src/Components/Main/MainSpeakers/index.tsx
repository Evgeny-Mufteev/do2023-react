import React from 'react'
import styles from './MainSpeakers.module.scss';
import { routes } from '../../../utils/constants/routes';
import { Link } from 'react-router-dom';

export const MainSpeakers = () => {
  return (
    <section className={styles.speakers}>
      <div className={styles.container}>
        <div className={styles.speakers__header}>
          <h2 className={styles['speakers__header-title']}>Спикеры конференции</h2>
          <div className={styles['speakers__header-btns']}>
            <Link to={routes.SPEAKERS} className={`${styles.btn} ${styles['black-btn']} ${styles['btn-speakers']}`}>Смотреть всех спикеров</Link>
          </div>
        </div>

        <div className={styles.speakers__block}>

          <div className={`${styles.q1} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker1.webp" type="image/webp" />
              <img src="./img/index/speaker1.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q2} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker2.webp" type="image/webp" />
              <img src="./img/index/speaker2.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q3} ${styles['speakers__block-item']} ${styles['_big-img']}`}>
            <picture>
              <source srcSet="./img/index/speaker7.webp" type="image/webp" />
              <img src="./img/index/speaker7.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q4} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker3.webp" type="image/webp" />
              <img src="./img/index/speaker3.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q5} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker8.webp" type="image/webp" />
              <img src="./img/index/speaker8.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q6} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker9.webp" type="image/webp" />
              <img src="./img/index/speaker9.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q7} ${styles['speakers__block-item']} ${styles['_big-img']}`}>
            <picture>
              <source srcSet="./img/index/speaker4.webp" type="image/webp" />
              <img src="./img/index/speaker4.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q8} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker11.webp" type="image/webp" />
              <img src="./img/index/speaker11.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q9} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker10.webp" type="image/webp" />
              <img src="./img/index/speaker10.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q10} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker5.webp" type="image/webp" />
              <img src="./img/index/speaker5.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q11} ${styles['speakers__block-item']}`}>
            <picture>
              <source srcSet="./img/index/speaker6.webp" type="image/webp" />
              <img src="./img/index/speaker6.png" alt="workshop1" />
            </picture>
          </div>

          <div className={`${styles.q12} ${styles['speakers__block-item']} ${styles['_big-img']}`}>
            <picture>
              <source srcSet="./img/index/speaker12.webp" type="image/webp" />
              <img src="./img/index/speaker12.png" alt="workshop1" />
            </picture>
          </div>

        </div>
      </div>
    </section>
  )
}
