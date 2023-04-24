import React from 'react';
import styles from './Header.module.scss';

import { Link } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles['header-nav']}>
          <div className={styles['header-nav__logo']}>
            <a href="index.html" className="">
              <svg className={styles['icon, logo-digital']}>
                <use href="./assets/svg/sprite.svg#logo-digital"></use>
              </svg>
            </a>
          </div>
          <nav className={styles['header-nav__menu']}>
            <ul className={styles['header-nav__list']}>
              <li className={styles['header-nav__item']}>
                <Link to={routes.PREMIUM} className={styles['header-nav__link']}>Премия</Link>
              </li>
              <li className={styles['header-nav__item']}>
                <Link to={routes.PROGRAM} className={styles['header-nav__link']}>Программма</Link>
              </li>
              <li className={styles['header-nav__item']}>
                <Link to={routes.SPEAKERS} className={styles['header-nav__link']}>Спикеры</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className={styles.header__holder}>
          <h1 className={styles.header__title}>конференция</h1>
          <div className={styles.header__subtitle}>
            Крупнейшая ежегодная конференция в области маркетинга, рекламы и продвижения, коммуникации, брендов и
            современных технологий. Топовые спикеры, инсайты, нетворкинг, афтерпати, воркшопы, знакомства, креатив и
            мотивация.
          </div>
        </div>
      </div>
    </header>
  );
};
