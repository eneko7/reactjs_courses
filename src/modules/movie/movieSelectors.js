import { createSelector } from 'reselect';

export const getMovie = state => state.movie.movie;
export const getMovieState = createSelector(
  [getMovie],
  movie => movie,
);

export const getIsFetchingMovie = state => state.movie.isFetchingMovie;
export const getIsFetchedMovie = state => state.movie.isFetchedMovie;
export const getErrorMovie = state => state.movie.errorMovie;
