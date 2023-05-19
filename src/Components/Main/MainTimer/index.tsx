import React from 'react';
import { useCountdownTimer } from '../../../utils/hooks/useCountdownTimer';
import styles from './MainTimer.module.scss';

const MainTimer = () => {
  const targetDate = new Date('2023-07-01T00:00:00');
  const timeLeft = useCountdownTimer({ targetDate });

  return (
    <div className={styles.timer}>
      <p className={styles['timer-title']}>До повышения цен</p>
      <div className={styles.countdown}>
        <div className={styles.timer__days}>
          <span className={styles.timer__number}>{timeLeft.timeLeft.days}</span>
        </div>

        <div className={styles.countdown__block}>
          <div className={styles.timer__hours}>
            <span className={styles.timer__number}>{timeLeft.timeLeft.hours}</span>
          </div>
          <p className={styles.timer__colon}>:</p>
          <div id="minutes" className={styles.timer__minutes}>
            <span className={styles.timer__number}>{timeLeft.timeLeft.minutes}</span>
          </div>
          <p className={styles.timer__colon}>:</p>
          <div id="seconds" className={styles.timer__seconds}>
            <span className={styles.timer__number}>{timeLeft.timeLeft.seconds}</span>
          </div>
        </div>

      </div>
      <div className={styles['countdown-text']}>
        <div className={styles.timer__days}>
          <span className={styles.timer__text}>дней</span>
        </div>

        <div className={styles.countdown__block}>
          <div className={styles.timer__hours}>
            <span className={styles.timer__text}>часов</span>
          </div>
          <div className={styles.timer__minutes}>
            <span className={styles.timer__text}>минут</span>
          </div>
          <div className={styles.timer__seconds}>
            <span className={styles.timer__text}>секунд</span>
          </div>
        </div>
      </div>
    </div >

  );
};

export default MainTimer;
