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

export const MainTickets = ({ name, newPrice, oldPrice, options }: ITickets) => {
  return (
    <div className={styles.tickets__item}>
      <div className={styles['tickets__item-box']}>
        <div className={styles['tickets__item-name']}>{name}</div>
        <div className={styles['tickets__item-price']}>
          <div className={styles['tickets__item-new']}>{newPrice}</div>
          <div className={styles['tickets__item-old']}>{oldPrice}</div>
        </div>
      </div>
      <div className={styles['tickets__item-box']}>
        <ul className={styles.tickets__description}>
          {options.map((item) => (
            <li className={styles['tickets__description-item']} key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className={styles['tickets__item-box']}>
        <button className={`${AppStyles.btn} ${styles.tickets__btn}`}>Купить</button>

      </div>
    </div >
  )
}
