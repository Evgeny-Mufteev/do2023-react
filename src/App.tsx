import React from 'react';
import styles from './App.module.scss';

import Layout from './Components/Commons/Layouts';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import MainPage from './Containers/MainPage';
import PremiumPage from './Containers/PremiumPage';
import ProgramPage from './Containers/ProgramPage';
import SpeakersPage from './Containers/SpeakersPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Layout>
        <Routes >
          <Route path={routes.MAIN} element={<MainPage />} />
          <Route path={routes.PREMIUM} element={<PremiumPage />} />
          <Route path={routes.PROGRAM} element={<ProgramPage />} />
          <Route path={routes.SPEAKERS} element={<SpeakersPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
