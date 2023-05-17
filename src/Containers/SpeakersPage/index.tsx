import React, { useEffect, useState } from 'react'
import ky from 'ky';
import Skeleton from '../../Components/Speakers/SpeakersInfo/skeleton';

import styles from './SpeakersPage.module.scss';
import commonStyles from '../../App.module.scss';

import { SpeakersShowMore } from '../../Components/Speakers/SpeakersShowMore';
import { type ISpeaker, SpeakersInfo } from '../../Components/Speakers/SpeakersInfo';

const apiSpeakers = ky.create({
  prefixUrl: 'https://645e79c08d08100293008a13.mockapi.io/api/data'
})

const SpeakersPage = () => {
  const [items, setItems] = useState<ISpeaker[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [amountItems, setAmountItems] = useState(4)

  const handleClickLoadMore = () => {
    setAmountItems(amountItems + 4);
  };

  useEffect(() => {
    const getSpeakersData = async () => {
      const data: ISpeaker[] = await apiSpeakers.get('').json();

      setItems(data)
      setIsLoading(false)
    }
    getSpeakersData().catch(console.error);
  }, [])

  return (
    <section className={styles.speakers}>
      <div className={commonStyles.container}>
        <div className={styles['speakers-block']}>

          {
            isLoading
              ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
              : items.slice(0, amountItems).map((obj) => <SpeakersInfo key={obj.id} {...obj} />)
          }

        </div>
        {
          !(amountItems >= items.length)
            ? <SpeakersShowMore handleClickLoadMore={handleClickLoadMore} />
            : null
        }

      </div>
    </section >

  )
}

export default SpeakersPage
