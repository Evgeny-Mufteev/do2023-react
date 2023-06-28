import React, { useEffect } from 'react'

import styles from './MainPage.module.scss';
import commonStyles from '../../App.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { getTickets } from '../../store/tickets/effects';
import { getTicketsSelector, getTicketsIsError, getTicketsIsLoading } from '../../store/tickets/selectors';

import { MainTickets } from '../../Components/Main/MainTickets';
import { MainSlider } from '../../Components/Main/MainSlider';
import MainTimer from '../../Components/Main/MainTimer';
import { Modal } from '../../Components/Commons/Modal';
import { isModalActiveSelector } from '../../store/modal/selectors';
import { MainSpeakers } from '../../Components/Main/MainSpeakers';

const MainPage = () => {
  const dispatch = useDispatch();
  const tickets = useSelector(getTicketsSelector);
  const isError = useSelector(getTicketsIsError);
  const isLoading = useSelector(getTicketsIsLoading);
  const modalActive2 = useSelector(isModalActiveSelector);

  useEffect(() => {
    dispatch(getTickets());
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
            {tickets.map((obj) => {
              return <MainTickets
                key={obj.id} {...obj}
              />;
            })}
            {isLoading && <span>Loading...</span>}
            {isError && <span>Error</span>}
          </div>
        </div>
      </section>

      <MainSpeakers />

      <section className={styles.photogallery}>
        < MainSlider />
      </section>

      {
        modalActive2 && (
          < Modal
          />
        )
      }

    </>
  )
}

export default MainPage
