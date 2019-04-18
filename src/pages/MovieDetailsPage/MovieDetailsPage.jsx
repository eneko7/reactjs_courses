import React from 'react';
import MovieDetails from '../../components/MovieDetails';
import ResultLine from '../../components/ResultLine';
import MoviesGrid from '../../components/MoviesGrid';
import Footer from '../../components/Footer';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';

const MovieDetailsPage = () => (
  <ErrorBoundary>
    <MovieDetails />
    <ResultLine />
    <MoviesGrid />
    <Footer />
  </ErrorBoundary>
);

export default MovieDetailsPage;
