import React from 'react'
import styles from './SpeakersInfo.module.scss';

interface ISpeakers {
  id: number;
  imageUrl: string;
  name: string;
  jobTitle: string;
  city: string;
}

const SpeakersInfo = ({ imageUrl, name, jobTitle, city }: ISpeakers) => {
  return (
    // {styles['header-nav__logo']}
    <div className={styles['speakers-block__item']}>
      <div className={styles['speakers-block__img']}>
        <img src={imageUrl} alt="workshop1" />
      </div>
      <div className={styles['speakers-block__inner']}>
        <div className={styles['speakers-block__fulname']}>
          <p className={styles['speakers-block__name']}>{name}</p>
        </div>
        <p className={styles['speakers-block__desc']}>{jobTitle}</p>
        <p className={styles['speakers-block__desc']}>{city}</p>
      </div>
    </div>
  )
}

export default SpeakersInfo
