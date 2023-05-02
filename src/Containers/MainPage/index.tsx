import React from 'react'
import ky from 'ky';
// import styles from './MainPage.module.scss';

const api = ky.create({
  prefixUrl: 'https://6448277d7bb84f5a3e53d41b.mockapi.io/header-info'
})

async function getInfoPage() {
  try {
    const InfoPage = await api.get('').json();
    console.log(InfoPage);
  } catch (error: any) {
    console.log(error.message);
  }
}

const MainPage = ({ setTextInfo }: any) => {
  React.useEffect(() => {
    const data = { name: 'Title', text: 'Decription' };
    setTextInfo(() => {
      return {
        ...data
      }
    })
  }, [])

  return (
    <div>MainPage</div>
  )
}

export default MainPage
