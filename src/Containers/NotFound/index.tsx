import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../../utils/constants/routes'
import appStyles from '../../App.module.scss';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div className={styles['btn-wrap']}>
      <Link
        to={routes.MAIN}
        className={`${appStyles['red-btn']} ${styles['btn-main']} `}>
        На главную
      </Link>
    </div>
  )
}
export default NotFound
