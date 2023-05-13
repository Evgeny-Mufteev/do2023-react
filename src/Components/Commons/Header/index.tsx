import React, { useState } from 'react';
import styles from './Header.module.scss';
import ky from 'ky';

import { Link, useLocation } from 'react-router-dom';
import { routes } from '../../../utils/constants/routes';

const api = ky.create({
  prefixUrl: 'https://6448277d7bb84f5a3e53d41b.mockapi.io/header-info'
})

interface PageInfoItem {
  name: string;
  text: string;
  pageName: string;
  id: string;
}

export const Header = () => {
  const { pathname } = useLocation();
  const [pageInfo, setPageInfo] = useState<PageInfoItem[]>([]);
  const [{ name, text }, setData] = useState({ name: '', text: '' });

  React.useEffect(() => {
    const getInfoPage = async () => {
      const json: PageInfoItem[] = await api.get('').json();

      setPageInfo(json);
    };

    getInfoPage().catch(console.error);
  }, []);

  React.useEffect(() => {
    console.log(pathname);

    const item = pageInfo.find((el) => el.pageName === pathname.slice(1)) ?? pageInfo[0];

    if (item) {
      setData({ name: item.name, text: item.text });
    }
  }, [pathname, pageInfo.length]
  );
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles['header-nav']}>
          <div className={styles['header-nav__logo']}>
            <Link to={routes.MAIN} className="">
              <svg width="124" height="32" viewBox="0 0 124 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M16.2111 29.4899C8.67518 29.4899 2.54197 23.4377 2.54197 15.9989C2.54197 8.55907 8.67518 2.51014 16.2122 2.51014C23.7492 2.51014 29.8813 8.55907 29.8813 15.9989C29.8813 23.4377 23.7492 29.4899 16.2122 29.4899H16.2111ZM2.54197 29.4899V24.5968C3.81392 26.562 5.50602 28.2316 7.50078 29.4899H2.54197ZM2.54197 2.51014H7.50078C5.50516 3.76731 3.81285 5.43718 2.54197 7.40319V2.51014ZM16.2122 0H0V32H16.2111C25.1651 32 32.4222 24.8362 32.4222 15.9989C32.4233 7.16383 25.1661 0 16.2122 0ZM46.8991 12.1755C47.8035 12.1755 48.5992 12.0051 49.2852 11.6622C49.9493 11.3428 50.5009 10.8355 50.869 10.2055C51.2378 9.57261 51.4222 8.84157 51.4222 8.00809C51.4222 7.17461 51.2378 6.4414 50.869 5.80956C50.4998 5.18021 49.9485 4.67282 49.2852 4.35178C48.5992 4.01213 47.8035 3.83961 46.9002 3.83961H43.9082V12.1744H46.9002L46.8991 12.1755ZM41.6209 1.92789H47.0056C48.3194 1.92789 49.4861 2.1802 50.5068 2.68482C51.5275 3.18836 52.3189 3.89999 52.8819 4.81973C53.445 5.74055 53.7271 6.80369 53.7271 8.00809C53.7271 9.2114 53.445 10.2745 52.8819 11.1954C52.3189 12.1151 51.5275 12.8278 50.5068 13.3303C49.4861 13.8349 48.3194 14.085 47.0056 14.085H41.6198V1.92897L41.6209 1.92789ZM55.9453 14.0872H58.1448V4.81218H55.9453V14.0872ZM56.0506 2.91017C55.9199 2.79239 55.8162 2.64856 55.7466 2.48828C55.6769 2.328 55.6429 2.15496 55.6467 1.98073C55.6467 1.60981 55.7817 1.30144 56.0506 1.05236C56.3206 0.803289 56.6543 0.678213 57.0538 0.678213C57.4533 0.678213 57.787 0.795741 58.057 1.03403C58.327 1.27124 58.462 1.571 58.462 1.92897C58.462 2.31175 58.3303 2.63198 58.0669 2.89292C57.8034 3.15385 57.4643 3.28432 57.0538 3.28432C56.6554 3.28432 56.3206 3.15924 56.0506 2.91017ZM67.3929 11.0897C67.9263 10.598 68.1941 9.9597 68.1941 9.17043C68.1941 8.39625 67.9263 7.76333 67.3929 7.27704C66.8584 6.79183 66.1746 6.54815 65.3415 6.54815C64.4986 6.54815 63.8093 6.79075 63.2748 7.27704C62.7414 7.76333 62.4736 8.39625 62.4736 9.17043C62.4736 9.9597 62.7414 10.598 63.2748 11.0897C63.8093 11.5835 64.4986 11.8294 65.3415 11.8294C66.1746 11.8294 66.8584 11.5835 67.3929 11.0897ZM70.3585 4.81111V12.6801C70.3585 15.9472 68.6683 17.5775 65.2911 17.5775C64.422 17.5823 63.5565 17.4684 62.7195 17.2389C61.9105 17.0125 61.2421 16.6858 60.7142 16.2588L61.6998 14.6252C62.1103 14.9606 62.6284 15.2312 63.2584 15.4339C63.8851 15.6345 64.5206 15.7358 65.1681 15.7358C66.1976 15.7358 66.955 15.5051 67.4379 15.0414C67.9186 14.5778 68.159 13.8726 68.159 12.9216V12.4364C67.7814 12.8418 67.3249 13.1481 66.787 13.3572C66.2196 13.5703 65.6164 13.6764 65.009 13.6699C64.1156 13.6699 63.3099 13.4812 62.5888 13.106C61.8806 12.7416 61.2891 12.1915 60.8799 11.5167C60.4629 10.832 60.2565 10.0524 60.2565 9.17043C60.2565 8.29274 60.464 7.51318 60.8799 6.83604C61.2981 6.15783 61.8677 5.63596 62.5888 5.26289C63.3099 4.89305 64.1156 4.7076 65.009 4.7076C65.6431 4.69957 66.2729 4.81159 66.8639 5.03754C67.4214 5.25965 67.8868 5.59283 68.2644 6.04461V4.81111H70.3585ZM73.244 14.0872H75.4436V4.81218H73.244V14.0872ZM73.3494 2.91017C73.2185 2.79249 73.1146 2.6487 73.0447 2.48841C72.9749 2.32813 72.9407 2.15504 72.9444 1.98073C72.9444 1.60981 73.0794 1.30144 73.3494 1.05236C73.6194 0.803289 73.9531 0.678213 74.3526 0.678213C74.751 0.678213 75.0858 0.795741 75.3547 1.03403C75.6247 1.27124 75.7608 1.571 75.7608 1.92897C75.7608 2.31175 75.6291 2.63198 75.3656 2.89292C75.1011 3.15385 74.762 3.28432 74.3526 3.28432C73.9531 3.28432 73.6194 3.15924 73.3494 2.91017ZM83.9783 13.5826C83.7203 13.7918 83.4075 13.9481 83.0354 14.0516C82.6552 14.1573 82.2617 14.2099 81.8665 14.208C80.8348 14.208 80.0369 13.9438 79.4738 13.4101C78.9108 12.8763 78.6287 12.1011 78.6287 11.0811V6.61824H77.0811V4.88119H78.6287V2.76461H80.8282V4.88119H83.345V6.61931H80.8282V11.0293C80.8282 11.4822 80.9402 11.8272 81.163 12.0644C81.3858 12.3016 81.7085 12.4181 82.13 12.4181C82.6239 12.4181 83.0333 12.2919 83.3625 12.0375L83.9772 13.5826H83.9783ZM90.5505 12.2542C90.9786 12.0062 91.2826 11.6504 91.4582 11.1857V10.1085H89.1862C87.9218 10.1085 87.2863 10.5204 87.2863 11.342C87.2863 11.7356 87.4444 12.0504 87.7616 12.2812C88.0777 12.513 88.5178 12.6262 89.0831 12.6262C89.634 12.6262 90.1224 12.5033 90.5505 12.2542ZM92.5569 5.69095C93.29 6.34436 93.6577 7.3288 93.6577 8.65072V14.085H91.5811V12.9572C91.2986 13.3718 90.8977 13.6952 90.4287 13.8867C89.9293 14.1012 89.3289 14.2101 88.6232 14.2101C87.9207 14.2101 87.3039 14.0894 86.776 13.8521C86.248 13.6149 85.8408 13.285 85.5544 12.8623C85.2658 12.4383 85.115 11.9383 85.1219 11.4283C85.1219 10.5948 85.4369 9.92735 86.0636 9.42382C86.6915 8.91812 87.6793 8.66797 89.0271 8.66797H91.4582V8.5278C91.4582 7.8787 91.2606 7.38271 90.8677 7.03551C90.4748 6.68832 89.892 6.51257 89.1182 6.51257C88.5902 6.51257 88.07 6.59344 87.5596 6.75733C87.0493 6.91906 86.6179 7.14549 86.2645 7.43446L85.4029 5.85484C85.8968 5.48177 86.4884 5.20035 87.181 5.00195C87.8969 4.80352 88.6377 4.7048 89.3816 4.70867C90.7645 4.70867 91.8237 5.0343 92.5569 5.68987V5.69095ZM96.4719 14.0861H98.6714V1.199H96.4719V14.0861ZM103.789 10.2616H109.68V8.25608H103.789V10.2616ZM47.6389 27.4735C48.1657 26.9409 48.4302 26.239 48.4302 25.371C48.4302 24.5019 48.1668 23.8021 47.6389 23.2684C47.1109 22.7368 46.4425 22.4705 45.6325 22.4705C44.8236 22.4705 44.1563 22.7368 43.6349 23.2684C43.1125 23.8021 42.8524 24.5019 42.8524 25.371C42.8524 26.239 43.1125 26.9409 43.6349 27.4735C44.1563 28.004 44.8236 28.2725 45.6325 28.2725C46.4425 28.2725 47.1109 28.004 47.6389 27.4746V27.4735ZM43.0642 29.5233C42.3182 29.1345 41.6989 28.5471 41.2774 27.8283C40.8493 27.1059 40.6342 26.2853 40.6342 25.3699C40.6342 24.4577 40.8493 23.6393 41.2774 22.9245C41.7017 22.21 42.3205 21.626 43.0642 21.2381C43.8259 20.8327 44.6831 20.63 45.6325 20.63C46.5951 20.63 47.4567 20.8327 48.2195 21.2381C48.9632 21.626 49.582 22.21 50.0063 22.9245C50.4344 23.6393 50.6473 24.4577 50.6473 25.371C50.6473 26.2853 50.4344 27.1048 50.0063 27.8294C49.5844 28.5474 48.9652 29.134 48.2195 29.5222C47.4567 29.9265 46.5951 30.1303 45.6325 30.1303C44.6831 30.1303 43.8259 29.9255 43.0642 29.5233ZM59.4333 22.5751H56.3777V30.0096H54.1782V22.5751H51.105V20.7346H59.4333V22.5751ZM68.62 22.5751H65.5633V30.0096H63.3637V22.5751H60.2927V20.7346H68.6189L68.62 22.5751ZM72.0773 22.9816C71.5911 23.3946 71.2937 23.9412 71.1883 24.6259H76.5214C76.427 23.952 76.1394 23.4097 75.6587 22.9913C75.178 22.574 74.5798 22.3681 73.8642 22.3681C73.1584 22.3681 72.5646 22.5708 72.0773 22.9827V22.9816ZM78.5793 26.0664H71.2059C71.3343 26.7479 71.6723 27.2881 72.2178 27.6892C72.7633 28.0871 73.4416 28.2876 74.2516 28.2876C75.2833 28.2876 76.1339 27.9523 76.8024 27.2827L77.9811 28.6197C77.5527 29.122 77.0023 29.5103 76.3809 29.7486C75.7355 30.0031 75.0089 30.1303 74.1989 30.1303C73.1639 30.1303 72.2562 29.9276 71.4693 29.5222C70.7095 29.1417 70.0776 28.5539 69.6495 27.8294C69.2215 27.1048 69.0063 26.2853 69.0063 25.371C69.0063 24.4696 69.2149 23.6555 69.6319 22.932C70.037 22.2194 70.6369 21.6322 71.3639 21.237C72.1026 20.8327 72.9356 20.63 73.8642 20.63C74.7795 20.63 75.5961 20.8284 76.3183 21.2295C77.0394 21.6273 77.6025 22.1902 78.0075 22.9137C78.4114 23.6372 78.6155 24.4728 78.6155 25.4249C78.6155 25.5758 78.6035 25.7872 78.5793 26.0664ZM90.0357 20.7346V30.0085H87.8538V22.574H83.2264V30.0085H81.0247V20.7346H90.0357ZM95.2711 22.9816C94.7849 23.3946 94.4875 23.9412 94.3821 24.6259H99.7163C99.6219 23.952 99.3343 23.4097 98.8536 22.9913C98.3729 22.574 97.7736 22.3681 97.0591 22.3681C96.3522 22.3681 95.7585 22.5708 95.2711 22.9827V22.9816ZM101.774 26.0664H94.3997C94.5314 26.7479 94.8672 27.2881 95.4127 27.6892C95.9582 28.0871 96.6365 28.2876 97.4454 28.2876C98.4771 28.2876 99.3289 27.9523 99.9973 27.2827L101.176 28.6197C100.747 29.1222 100.197 29.5104 99.5747 29.7486C98.9293 30.0031 98.2028 30.1303 97.3927 30.1303C96.361 30.1303 95.4511 29.9276 94.6631 29.5222C93.9033 29.1417 93.2714 28.5539 92.8433 27.8294C92.4153 27.1048 92.2001 26.2853 92.2001 25.371C92.2001 24.4696 92.4087 23.6555 92.8258 22.932C93.2309 22.2194 93.8308 21.6322 94.5577 21.237C95.2975 20.8327 96.1316 20.63 97.0591 20.63C97.9734 20.63 98.791 20.8284 99.5121 21.2295C100.233 21.6273 100.796 22.1902 101.201 22.9137C101.606 23.6372 101.809 24.4728 101.809 25.4249C101.809 25.5758 101.798 25.7872 101.774 26.0664ZM112.615 20.7346V30.0085H110.415V22.574H106.894L106.808 24.4157C106.75 25.6427 106.634 26.6713 106.464 27.4994C106.294 28.3264 106.006 28.9809 105.601 29.4618C105.198 29.9416 104.642 30.181 103.938 30.181C103.609 30.181 103.204 30.1163 102.724 29.9912L102.829 28.169C102.994 28.2024 103.134 28.2197 103.252 28.2197C103.697 28.2197 104.031 28.0429 104.255 27.6892C104.49 27.3016 104.638 26.8688 104.687 26.4201C104.751 25.9284 104.808 25.2254 104.853 24.3111L105.011 20.7335H112.615V20.7346ZM121.255 28.0278C121.595 27.7496 121.765 27.3442 121.765 26.8126C121.765 26.2929 121.601 25.909 121.273 25.6664C120.943 25.4227 120.446 25.2955 119.778 25.2836L117.771 25.2664V28.4095L119.778 28.4267C120.422 28.4386 120.915 28.3081 121.255 28.0278ZM123.042 24.5893C123.678 25.1219 124 25.8767 124 26.8492C124 27.866 123.649 28.6531 122.944 29.2084C122.241 29.7637 121.249 30.0365 119.97 30.0247L115.57 30.0074V20.7346H117.771V23.773L120.287 23.7903C121.483 23.7903 122.401 24.0566 123.042 24.5893Z" fill="#EEEAEA" />
              </svg>
            </Link>
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
          <h1 className={styles.header__title}>{name}</h1>
          <div className={styles.header__subtitle}>{text}</div>
        </div>
      </div>
    </header>
  );
};
