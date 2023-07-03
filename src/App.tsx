import React, { lazy, Suspense } from 'react';
import styles from './App.module.scss';

import Layout from './Components/Commons/Layouts';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/constants/routes';

const MainPage = lazy(async () => await import('./Containers/MainPage'))
const SpeakersPage = lazy(async () => await import('./Containers/SpeakersPage'))
const PremiumPage = lazy(async () => await import('./Containers/PremiumPage'))
const ProgramPage = lazy(async () => await import('./Containers/ProgramPage'))
const NotFound = lazy(async () => await import('./Containers/NotFound'))

function App() {
  return (
    <div className={styles.wrapper}>
      <Layout>
        <Routes >
          <Route path={routes.MAIN} element={<Suspense fallback={<p>Loading...</p>}><MainPage /></Suspense>} />
          <Route path={routes.PREMIUM} element={<Suspense fallback={<p>Loading...</p>}><PremiumPage /></Suspense>} />
          <Route path={routes.PROGRAM} element={<Suspense fallback={<p>Loading...</p>}><ProgramPage /></Suspense>} />
          <Route path={routes.SPEAKERS} element={<Suspense fallback={<p>Loading...</p>}><SpeakersPage /></Suspense>} />
          <Route path={routes.NOT_FOUND} element={<Suspense fallback={<p>Loading...</p>}><NotFound /></Suspense>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
