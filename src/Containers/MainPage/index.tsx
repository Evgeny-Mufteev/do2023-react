import React from 'react'

import styles from './MainPage.module.scss';
import commonStyles from '../../App.module.scss';
import { MainTickets } from '../../Components/Main/MainTickets';
import axios from 'axios';

const apiTickets = axios.create({
  baseURL: 'https://645e79c08d08100293008a13.mockapi.io/api/data'
})

const MainPage = () => {
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

          < MainTickets />
          < MainTickets />
          < MainTickets />
          < MainTickets />
        </div>
      </div>
    </section>
  )
}

export default MainPage
