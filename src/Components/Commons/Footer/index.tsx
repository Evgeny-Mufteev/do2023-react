import React from 'react';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__info}>
          <div className={styles['footer__info-social']}>
            <a href="https://vk.com/digitalottepel" target="_blank" rel="noreferrer">
              <svg className={styles['icon, icon-vk']}>
                <use href="./assets/svg/sprite.svg#icon-vk"></use>
              </svg>
            </a>
            <a href="https://t.me/digitalottepel" target="_blank" rel="noreferrer">
              <svg className={styles['icon, icon-tg']}>
                <use href="./assets/svg/sprite.svg#icon-tg"></use>
              </svg>
            </a>
          </div>
          <div className={styles['footer__info-adress']}>Нижний Новгород, ул. Академика Сахарова, 4, технопарк Анкудиновка</div>
          <div className={styles['footer__info-contacts']}>
            <a href="tel:+79960004329" className={styles['footer__info-link']}> +7 (996) 000-43-29</a>
            <a href="tel:+78312171703" className={styles['footer__info-link']}> +7(831) 217 - 17 - 03</a >
            <a href="mailto:info@digitalnn.ru" className={styles['footer__info-link']}> info@digitalnn.ru</a >
          </div >
        </div >
        <div className={styles.footer__copyright}>
          <p className={styles['footer__copyright-link']}>© Все права защищены</p >
          <a href="./assets/plugins/confidential_2023.pdf" className={styles['footer__copyright-link']} target="_blank" >
            Политика конфиденциальности</a >
          {/* <a href="javascript:void(0);" className={styles['footer__copyright-link']} target="_blank" rel="noreferrer" > Разработано кем - то</a > */}
        </div >
      </div >
    </footer >
  )
};
