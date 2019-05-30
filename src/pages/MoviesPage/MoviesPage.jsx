import React from 'react';
import Header from '../../components/Header';
import ResultLine from '../../components/ResultLine';
import MoviesGrid from '../../components/MoviesGrid';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const MoviesPage = () => (
  <ErrorBoundary>
    <Header />
    <ResultLine />
    <MoviesGrid />
    <Footer />
  </ErrorBoundary>
);

export default MoviesPage;
