import React, { useState } from 'react';
import styles from './App.module.scss';

import Layout from './Components/Commons/Layouts';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import MainPage from './Containers/MainPage';
import PremiumPage from './Containers/PremiumPage';
import ProgramPage from './Containers/ProgramPage';
import SpeakersPage from './Containers/SpeakersPage';

function App() {
  const [textInfo, setTextInfo] = useState({ name: '', text: '' });

  return (
    <div className={styles.wrapper}>
      <Layout name={textInfo.name} text={textInfo.text}>
        <Routes>
          <Route path={routes.MAIN} element={<MainPage setTextInfo={setTextInfo} />} />
          <Route path={routes.PREMIUM} element={<PremiumPage setTextInfo={setTextInfo} />} />
          <Route path={routes.PROGRAM} element={<ProgramPage />} />
          <Route path={routes.SPEAKERS} element={<SpeakersPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
