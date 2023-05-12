import React from 'react'
import styles from './SpeakersShowMore.module.scss';

const SpeakersShowMore = () => {
  return (
    <button className={`${styles.speakers__btn} ${styles['red-btn']}`}>Показать ещё</button>
  )
}

export default SpeakersShowMore
