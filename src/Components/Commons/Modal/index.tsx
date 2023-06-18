import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { selectedTicketId } from '../../../store/tickets/selectors';

import { useForm } from 'react-hook-form';
import styles from './MainModal.module.scss';
import classNames from 'classnames';
import axios from 'axios';

interface IModalProps {
  modalActive: boolean;
  changeModalActive: (status: boolean) => void;
  onClose: () => void;
}

interface IFormData {
  fullName: string;
  email: string;
  phone: string;
  privacyPolicy: boolean;
  ticketId: string
}

const addBodyClass = (className: string) => {
  document.body.classList.add(className);
}

const removeBodyClass = (className: string) => {
  document.body.classList.remove(className);
}

export const Modal = ({ modalActive, changeModalActive, onClose }: IModalProps) => {
  const ticketId = useSelector(selectedTicketId);
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

  const { register, handleSubmit, formState: { errors } } = useForm<IFormData>();

  const onSubmit = async (data: IFormData) => {
    try {
      const response = await axios.post('http://127.0.0.1:3123/selectTickets', data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
              <form
                onSubmit={handleSubmit((data) => { void onSubmit(data); })}
                className={styles['form-ticket']}
                name="form-ticket"
              >

                <div className={styles['popup-ticket__box']}>

                  <div className={styles['popup-ticket__input-wrap']}>
                    <input
                      className={styles['popup-ticket__input']}
                      type="text"
                      placeholder="ФИО"
                      {...register('fullName', { required: true })}
                    />
                    {errors.fullName && (
                      <span className={styles.error}>Поле ФИО обязательно для заполнения</span>
                    )}
                  </div>

                  <div className={styles['popup-ticket__input-wrap']}>
                    <input
                      className={styles['popup-ticket__input']}
                      type="email"
                      placeholder="Email*"
                      {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email?.type === 'required' && (
                      <span className={styles.error}>Поле Email обязательно для заполнения</span>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <span className={styles.error}>Email должен быть валидным</span>
                    )}
                  </div>

                  <div className={styles['popup-ticket__input-wrap']}>
                    <input
                      className={styles['popup-ticket__input']}
                      type="number"
                      placeholder="Номер телефона*"
                      {...register('phone', {
                        required: true,
                        minLength: 10,
                        maxLength: 15,
                        pattern: /^[0-9\b()+-]{10,15}$/i,
                      })}
                    />
                    {errors.phone?.type === 'required' && (
                      <span className={styles.error}>Поле Номер телефона обязательно для заполнения</span>
                    )}
                    {errors.phone?.type === 'minLength' && (
                      <span className={styles.error}>Номер телефона должен содержать не менее 10 цифр</span>
                    )}
                    {errors.phone?.type === 'maxLength' && (
                      <span className={styles.error}>Номер телефона должен содержать не более 15 цифр</span>
                    )}
                    {errors.phone?.type === 'pattern' && (
                      <span className={styles.error}>Номер телефона должен быть валидным</span>
                    )}
                  </div>

                  <div className={styles['popup-ticket__checkbox-wrap']}>
                    <input className={styles['popup-ticket__checkbox']}
                      type="checkbox"
                      id="privacy-policy"
                      {...register('privacyPolicy', { required: true })}
                    />
                    <label htmlFor="privacy-policy">
                      <span className={styles['privacy-policy__text']}>
                        Я согласен на обработку персональных данных и ознакомился с
                        <a href="confidential_2023.pdf" className={styles['privacy-policy__link']} target="_blank">
                          политикой конфиденциальности</a>
                      </span>
                    </label>
                    {errors.privacyPolicy && (
                      <span className={styles.error__policy}>Вы должны согласиться с политикой конфиденциальности</span>
                    )}
                  </div>

                </div>
                <button type="submit" className={`${styles.btn} ${styles['red-btn']}`}>Перейти к оплате</button>
                <input type="hidden"
                  defaultValue={ticketId?.toString()}
                  {...register('ticketId')} />
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
