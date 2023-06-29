import React from 'react'
import styles from './MainSpeakers.module.scss';
import { routes } from '../../../utils/constants/routes';
import { Link } from 'react-router-dom';
import { MainSpeakersList } from '../MainSpeakersList';
import appStyles from '../../../App.module.scss';

export const MainSpeakers = () => {
  return (
    <section className={styles.speakers}>
      <div className={appStyles.container}>
        <div className={styles.speakers__header}>
          <h2 className={styles['speakers__header-title']}>Спикеры конференции</h2>
          <div className={styles['speakers__header-btns']}>
            <Link
              to={routes.SPEAKERS}
              className={`${appStyles.btn} ${appStyles['black-btn']} ${styles['btn-speakers']}`}>
              Смотреть всех спикеров</Link>
          </div>
        </div>
        <MainSpeakersList />
      </div>
    </section>
  )
}
