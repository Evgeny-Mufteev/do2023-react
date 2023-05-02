/* eslint-disable react/prop-types */
import React from 'react'
import { Header } from '../Header';
import { Footer } from '../Footer';
import styles from './Layouts.module.scss';

interface TProps {
  children: JSX.Element;
  name: string;
  text: string;
}

const Layout = ({ children, name, text }: TProps) => {
  return (
    <div className={styles.postPageWrapper}>
      <Header name={name} text={text} />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
