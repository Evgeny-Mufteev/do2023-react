import React from 'react'
import { useDispatch } from 'react-redux';

import styles from './MainTickets.module.scss';
import AppStyles from '../../../App.module.scss';
import { type ITicketsModal } from '../../../types';
import { setSelectedTicketId } from '../../../store/tickets';

export const MainTickets = (
  { name, newPrice, oldPrice, options, changeModalActive, id }: ITicketsModal) => {
  const dispatch = useDispatch();

  const handleTicketClick = (id: number) => {
    dispatch(setSelectedTicketId(id));
    console.log(`выбран id ${id}`);
  };

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
        <button
          className={`${AppStyles.btn} ${styles.tickets__btn}`}
          onClick={() => {
            changeModalActive(true);
            handleTicketClick(id);
          }}>

          Купить
        </button>
      </div>
    </div >
  )
}
