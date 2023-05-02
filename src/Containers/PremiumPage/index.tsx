import React from 'react'
// import styles from './PremiumPage.module.scss';

const PremiumPage = ({ setTextInfo }: any) => {
  React.useEffect(() => {
    const data = { name: 'Title2', text: 'Decription2' };
    setTextInfo(() => {
      return {
        ...data
      }
    })
  }, [])
  return (
    <div>PremiumPage</div>
  )
}

export default PremiumPage
