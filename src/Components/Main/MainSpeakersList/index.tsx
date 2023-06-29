import React from 'react'
import styles from './MainSpeakersList.module.scss';

const speakers = [
  {
    id: 1,
    imageSrc: './img/index/speaker1.png',
    imageAlt: 'speaker1',
  },
  {
    id: 2,
    imageSrc: './img/index/speaker2.png',
    imageAlt: 'speaker2',
  },
  {
    id: 3,
    imageSrc: './img/index/speaker3.png',
    imageAlt: 'speaker3',
  },
  {
    id: 4,
    imageSrc: './img/index/speaker4.png',
    imageAlt: 'speaker4',
  },
  {
    id: 5,
    imageSrc: './img/index/speaker5.png',
    imageAlt: 'speaker5',
  },
  {
    id: 6,
    imageSrc: './img/index/speaker6.png',
    imageAlt: 'speaker6',
  },
  {
    id: 7,
    imageSrc: './img/index/speaker7.png',
    imageAlt: 'speaker7',
  },
  {
    id: 8,
    imageSrc: './img/index/speaker8.png',
    imageAlt: 'speaker8',
  },
  {
    id: 9,
    imageSrc: './img/index/speaker9.png',
    imageAlt: 'speaker9',
  },
  {
    id: 10,
    imageSrc: './img/index/speaker10.png',
    imageAlt: 'speaker10',
  },
  {
    id: 11,
    imageSrc: './img/index/speaker11.png',
    imageAlt: 'speaker11',
  },
  {
    id: 12,
    imageSrc: './img/index/speaker12.png',
    imageAlt: 'speaker12',
  },

];

export const MainSpeakersList = () => {
  return (
    <div className={styles.speakers__block}>

      {speakers.map(speaker => (
        <div key={speaker.id} className={`${styles[`q${speaker.id}`]} ${styles['speakers__block-item']}`}>

          <picture>
            <source srcSet={`./img/index/speaker${speaker.id}.webp`} type="image/webp" />
            <img src={speaker.imageSrc} alt={speaker.imageAlt} />
          </picture>
        </div>
      ))
      }

    </div >
  )
}
