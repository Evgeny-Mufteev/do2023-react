import React, { useEffect, useState } from 'react'
import Skeleton from '../../Components/Speakers/SpeakersInfo/skeleton';

import { useDispatch, useSelector } from 'react-redux';
import { getSpeakers } from '../../store/speakers/effects';
import { getSpeakersSelector, getSpeakersIsError, getSpeakersIsLoading } from '../../store/speakers/selectors';

import styles from './SpeakersPage.module.scss';
import commonStyles from '../../App.module.scss';

import { SpeakersShowMore } from '../../Components/Speakers/SpeakersShowMore';
import { SpeakersInfo } from '../../Components/Speakers/SpeakersInfo';

const SpeakersPage = () => {
  const dispatch = useDispatch();
  const speakers = useSelector(getSpeakersSelector);
  const isError = useSelector(getSpeakersIsError);
  const isLoading = useSelector(getSpeakersIsLoading);

  const [amountItems, setAmountItems] = useState(4)

  const handleClickLoadMore = () => {
    setAmountItems(amountItems + 4);
  };

  useEffect(() => {
    dispatch(getSpeakers());
  }, []);

  return (
    <section className={styles.speakers}>
      <div className={commonStyles.container}>
        <div className={styles['speakers-block']}>

          {
            isLoading
              ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
              : speakers.slice(0, amountItems).map((obj) => <SpeakersInfo key={obj.id} {...obj} />)
          }
          {isError && <span>Error</span>}

        </div>
        {
          amountItems < speakers.length
            ? <SpeakersShowMore handleClickLoadMore={handleClickLoadMore} />
            : null
        }

      </div>
    </section >

  )
}

export default SpeakersPage
