import React from 'react'
import styles from './SpeakersPage.module.scss';
import common from '../../App.module.scss';
import SpeakersInfo from '../../Components/Speakers/SpeakersInfo';
import speakers from '../../assets/speakers.json';

const SpeakersPage = () => {
  return (
    // {styles['header-nav__logo']
    <section className={styles.speakers}>
      <div className={common.container}>
        <div className={styles['speakers-block']}>
          {
            speakers.map((obj) => {
              return <SpeakersInfo key={obj.id} {...obj} />
            })
          }
        </div>
      </div>
    </section >

  )
}

export default SpeakersPage
