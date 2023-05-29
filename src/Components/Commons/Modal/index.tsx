import React, { useEffect } from 'react'

import styles from './MainModal.module.scss';
import classNames from 'classnames';

interface IModalProps {
  modalActive: boolean;
  changeModalActive: (status: boolean) => void;
  onClose: () => void;
}

const addBodyClass = (className: string) => {
  document.body.classList.add(className);
}

const removeBodyClass = (className: string) => {
  document.body.classList.remove(className);
}

export const Modal = ({ modalActive, changeModalActive, onClose }: IModalProps) => {
  useEffect(() => {
    if (modalActive) {
      addBodyClass('no-scroll');
    } else {
      removeBodyClass('no-scroll');
    }
    return () => {
      removeBodyClass('no-scroll');
    };
  }, [modalActive]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (

    <div
      role="button"
      className={classNames(styles['popup-ticket__wrap'], {
        [styles.active]: modalActive,
      })}
      onClick={() => { changeModalActive(false); }}>
      <div
        className={classNames(styles['popup-ticket__content'], {
          [styles.active]: modalActive,
        })}
        onClick={e => { e.stopPropagation() }}
      >

        <div className={styles['popup-ticket']}>
          <div className={styles['popup-ticket__inner']}>
            <div className={styles['popup-ticket__block']}>
              <div className={styles['popup-ticket__header']}>
                <h4 className={styles['popup-ticket__title']}>Купить билет</h4>
                <p className={styles['popup-ticket__subtitle']}>Перед оплатой необходимо оставить свои актуальные контактные данные</p>
              </div>
              <form action="#1" className={styles['form-ticket']} method="get" name="form-ticket">

                <div className={styles['popup-ticket__box']}>
                  <div className={styles['popup-ticket__input-wrap']}>
                    <input type="text" className={styles['popup-ticket__input']} placeholder="ФИО" name="full-name" />
                  </div>

                  <div className={styles['popup-ticket__input-wrap']}>
                    <input type="email" className={styles['popup-ticket__input']} placeholder="Email*" required name="email" />
                  </div>

                  <div className={styles['popup-ticket__input-wrap']}>
                    <input type="tel" className={styles['popup-ticket__input']} placeholder="Номер телефона*" required name="phone" />
                  </div>

                  <div className={styles['popup-ticket__checkbox-wrap']}>
                    <input type="checkbox" className={styles['popup-ticket__checkbox']} id="privacy-policy" name="privacy-policy" required />
                    <label htmlFor="privacy-policy">
                      <span className={styles['privacy-policy__text']}>
                        Я согласен на обработку персональных данных и ознакомился с
                        <a href="confidential_2023.pdf" className={styles['privacy-policy__link']} target="_blank">
                          политикой конфиденциальности</a>
                      </span>
                    </label>
                  </div>
                </div>
                <button type="submit" className={`${styles.btn} ${styles['red-btn']}`}>Перейти к оплате</button>
                <input type="hidden" className={styles['js-select-tickets']} name="select-tickets" />

              </form>
            </div>
            <button className={styles['popup-ticket__close']} onClick={() => { changeModalActive(false); }}>
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="28.6418" height="2.47077" transform="matrix(0.707109 -0.707105 0.707109 0.707105 0.000976562 20.2527)" fill="#EEEAEA" />
                <rect width="28.6418" height="2.47077" transform="matrix(-0.707109 -0.707105 -0.707109 0.707105 22 20.2527)" fill="#EEEAEA" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
