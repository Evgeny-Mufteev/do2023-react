import React, { useEffect, useState } from 'react'

import styles from './MainPage.module.scss';
import commonStyles from '../../App.module.scss';

import { type ITickets, MainTickets } from '../../Components/Main/MainTickets';
import { MainSlider } from '../../Components/Main/MainSlider';
import MainTimer from '../../Components/Main/MainTimer';
import { apiClient } from '../../utils/network/apiClient';

const MainPage = () => {
  const [dataTickets, setDataTickets] = useState<ITickets[]>([]);

  useEffect(() => {
    const getTickets = async () => {
      const response = await apiClient.get<ITickets[]>('/tickets');

      setDataTickets(response.data)
    };
    getTickets().catch(console.error);
  }, []);

  return (
    <>
      <section className={styles.tickets}>
        <div className={commonStyles.container}>
          <div className={styles.tickets__header}>
            <div className={styles['tickets__header-block']}>
              <h2 className={styles.tickets__title}>Билеты</h2>
              <p className={styles.tickets__info}>Внимание! Количество offline билетов строго ограничено.</p>
              <p className={styles.tickets__info}>Билеты на воркшопы и афтерпати можно приобрести отдельно</p>
            </div>
            <MainTimer />
          </div>
          <div className={styles['tickets__item-wrap']}>
            {dataTickets.map((obj) => {
              return <MainTickets key={obj.id} {...obj} />;
            })}
          </div>
        </div>
      </section>
      <section className={styles.photogallery}>
        < MainSlider />
      </section>
    </>
  )
}

export default MainPage
