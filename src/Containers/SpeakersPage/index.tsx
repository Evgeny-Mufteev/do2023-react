import React, { useEffect, useState } from 'react'
import ky from 'ky';

import styles from './SpeakersPage.module.scss';
import common from '../../App.module.scss';

import SpeakersInfo, { type ISpeaker } from '../../Components/Speakers/SpeakersInfo';
import SpeakersShowMore from '../../Components/Speakers/SpeakersShowMore';
import Skeleton from '../../Components/Speakers/SpeakersInfo/skeleton';

const apiSpeakers = ky.create({
  prefixUrl: 'https://645e79c08d08100293008a13.mockapi.io/api/data'
})

const SpeakersPage = () => {
  const [items, setItems] = useState<ISpeaker[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // console.log(items.slice(0, 4));

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
      <div className={common.container}>
        <div className={styles['speakers-block']}>

          {
            isLoading
              ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => <SpeakersInfo key={obj.id} {...obj} />)
          }

        </div>
        <SpeakersShowMore />
      </div>
    </section >

  )
}

export default SpeakersPage
