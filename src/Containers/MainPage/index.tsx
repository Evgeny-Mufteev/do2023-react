import React, { useEffect, useState } from 'react'
import ky from 'ky';

import styles from './MainPage.module.scss';
import commonStyles from '../../App.module.scss';

import { type ITickets, MainTickets } from '../../Components/Main/MainTickets';

const apiTickets = ky.create({
  prefixUrl: 'https://64481a0e50c253374438830f.mockapi.io/ticket'
})

const MainPage = () => {
  const [dataTickets, setDataTickets] = useState<ITickets[]>([]);

  useEffect(() => {
    const getTickets = async () => {
      const data: ITickets[] = await apiTickets.get('').json();

      setDataTickets(data)
    }
    getTickets().catch(console.error);
  }, [])

  return (
    <section className={styles.tickets} id="tickets">
      <div className={commonStyles.container}>
        <div className={styles.tickets__header}>
          <div className={styles['tickets__header-block']}>
            <h2 className={styles.tickets__title}>Билеты</h2>
            <p className={styles.tickets__info}>Внимание! Количество offline билетов строго ограничено.</p>
            <p className={styles.tickets__info}>Билеты на воркшопы и афтерпати можно приобрести отдельно</p>
          </div>
          {/* <div className="tickets__header-block">
            <div className="timer">
              <p className="timer-title">До повышения цен</p>
              <div className="countdown">
                <div id="days" className="timer__days">
                  <span className="timer__number">00</span>
                </div>

                <div className="countdown__block">
                  <div id="hours" className="timer__hours">
                    <span className="timer__number">00</span>
                  </div>
                  <p className="timer__colon">:</p>
                  <div id="minutes" className="timer__minutes">
                    <span className="timer__number">00</span>
                  </div>
                  <p className="timer__colon">:</p>
                  <div id="seconds" className="timer__seconds">
                    <span className="timer__number">00</span>
                  </div>
                </div>

              </div>
              <div className="countdown-text">
                <div className="timer__days">
                  <span className="timer__text">дней</span>
                </div>

                <div className="countdown__block">
                  <div className="timer__hours">
                    <span className="timer__text">часов</span>
                  </div>
                  <div className="timer__minutes">
                    <span className="timer__text">минут</span>
                  </div>
                  <div className="timer__seconds">
                    <span className="timer__text">секунд</span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className={styles['tickets__item-wrap']}>
          {
            dataTickets.map((obj) => {
              return <MainTickets key={obj.id} {...obj} />
            })
          }
        </div>
      </div>
    </section>
  )
}

export default MainPage
