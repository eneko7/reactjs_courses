import { createSelector } from 'reselect';

export const getMovies = state => state.movies.allMovies;
export const getMoviesState = createSelector(
  [getMovies],
  allMovies => allMovies,
);

export const getQuantityMovies = state => state.movies.quantity;
export const getQuantityMoviesState = createSelector(
  [getQuantityMovies],
  quantity => quantity,
);

export const getIsFetchingMovies = state => state.movies.isFetchingMovies;
export const getIsFetchedMovies = state => state.movies.isFetchedMovies;
export const getErrorMovies = state => state.movies.errorMovies;
