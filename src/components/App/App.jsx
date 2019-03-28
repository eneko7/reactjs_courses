import React from 'react';
import Header from '../Header';
import ResultLine from '../ResultLine';
import MoviesGrid from '../MoviesGrid/MoviesGrid';
import Footer from '../Footer';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import styles from './App.scss';

const App = () => (
  <main className={styles.main}>
    <ErrorBoundary>
      <Header />
      <ResultLine />
      <MoviesGrid />
      <Footer />
    </ErrorBoundary>
  </main>

);

export default App;
