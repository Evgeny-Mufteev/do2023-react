import React from 'react'

import styles from './MainTickets.module.scss';
import AppStyles from '../../../App.module.scss';

export interface ITickets {
  name: string;
  newPrice: number;
  oldPrice: number;
  options: string[];
  id: number;
}

export const MainTickets = () => {
  return (
    <div className={styles.tickets__item}>
      <div className={styles['tickets__item-box']}>
        <div className={styles['tickets__item-name']}>Онлайн</div>
        <div className={styles['tickets__item-price']}>
          <div className={styles['tickets__item-new']}>800₽</div>
          <div className={styles['tickets__item-old']}>1 500₽</div>
        </div>
      </div>
      <div className={styles['tickets__item-box']}>
        <ul className={styles.tickets__description}>
          <li className={styles['tickets__description-item']}>- Билет на 2 дня мероприятия офлайн;</li>
          <li className={styles['tickets__description-item']}>- Материалы конференции (видеозаписи выступлений и презентации
            спикеров в PDF)</li>
        </ul>
      </div>
      <div className={styles['tickets__item-box']}>
        <button className={`${AppStyles.btn} ${styles.tickets__btn}`}>Купить</button>

      </div>
    </div >
  )
}
