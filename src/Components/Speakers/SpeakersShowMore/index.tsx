import React from 'react'
import styles from './SpeakersShowMore.module.scss';

interface ISpeakersShowMore {
  handleClickLoadMore: () => void;
}

export const SpeakersShowMore = (speakersShowMore: ISpeakersShowMore) => {
  return (
    <button onClick={speakersShowMore.handleClickLoadMore} className={`${styles.speakers__btn} ${styles['red-btn']}`}>Показать ещё</button>
  )
}
