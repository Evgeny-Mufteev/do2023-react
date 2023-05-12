import React, { useEffect, useState } from 'react'
import styles from './SpeakersPage.module.scss';
import common from '../../App.module.scss';
import SpeakersInfo from '../../Components/Speakers/SpeakersInfo';
// import speakers from '../../assets/speakers.json';
import SpeakersShowMore from '../../Components/Speakers/SpeakersShowMore';
import ky from 'ky';

const apiSpeakers = ky.create({
  prefixUrl: 'https://645e79c08d08100293008a13.mockapi.io/api/data'
})

const SpeakersPage = () => {
  interface ISpeaker {
    id: number;
    imageUrl: string;
    name: string;
    jobTitle: string;
    city: string;
  }

  const [items, setItems] = useState<ISpeaker[]>([]);

  useEffect(() => {
    const getSpeakersData = async () => {
      const data: ISpeaker[] = await apiSpeakers.get('').json();

      setItems(data)
    }
    getSpeakersData().catch(console.error);
  }, [])

  return (
    <section className={styles.speakers}>
      <div className={common.container}>
        <div className={styles['speakers-block']}>
          {
            items.map((obj) => {
              return <SpeakersInfo key={obj.id} {...obj} />
            })
          }
        </div>
        <SpeakersShowMore />
      </div>
    </section >

  )
}

export default SpeakersPage
