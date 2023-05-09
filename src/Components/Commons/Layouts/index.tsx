import React from 'react'
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layouts.module.scss';

interface TProps {
  children: JSX.Element;
}

const Layout = ({ children }: TProps) => {
  return (
    <div className={styles.postPageWrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
