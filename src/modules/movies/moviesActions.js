/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-else-return */
import { createAction } from 'redux-actions';
import axios from 'axios';
import queryString from 'query-string';
import { fetchMovie } from '../movie/movieActions';

export const urlDefaultMoviesList = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21';
export const urlSortMoviesList = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&searchBy=title&limit=21';
export const urlSearchMovies = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21';

export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const dataRequest = createAction(DATA_REQUEST);
export const dataSuccess = createAction(DATA_SUCCESS);
export const dataError = createAction(DATA_ERROR);

export function fetchMovies(url, offset = 0, searchBy = 'title', sortBy = 'release_date') {
  return (dispatch) => {
    dispatch(dataRequest());
    return axios.get(`${url}&sortBy=${sortBy}&searchBy=${searchBy}&offset=${offset}`)
      .then(response => dispatch(dataSuccess({
        movies: response.data.data,
        quantity: response.data.total,
        searchBy,
        sortBy,
        url,
        offset,
      })))
      .catch(error => dispatch(dataError(error.message)));
  };
}

export function fetchDefaultMovies() {
  return dispatch => dispatch(fetchMovies(urlDefaultMoviesList));
}

export function fetchSearchMovies(searchRequest, searchBy, sortBy) {
  return (dispatch) => {
    if (searchBy === 'genres') {
      return dispatch(fetchMovies(`${urlSearchMovies}&filter=${searchRequest}`, 0, searchBy, sortBy));
    } else {
      return dispatch(fetchMovies(`${urlSearchMovies}&search=${searchRequest}`, 0, searchBy, sortBy));
    }
  };
}

export function fetchNextMovies() {
  return (dispatch, getState) => {
    const state = getState();
    if (state.movies.offset !== -1) {
      dispatch(fetchMovies(
        state.movies.url,
        state.movies.offset + 22,
      ));
    }
  };
}

export function fetchMoviesByRoute(location, history, match) {
  return (dispatch) => {
    const parsed = queryString.parse(location.search);
    const filmID = match.params.id;
    const { query, searchBy, sortBy } = parsed;
    if (history.location.pathname === '/') {
      return dispatch(fetchDefaultMovies());
    }
    if (query) {
      return dispatch(fetchSearchMovies(query, searchBy, sortBy));
    }
    if (filmID) {
      return Promise.all([
        dispatch(fetchMovie(filmID)),
        dispatch(fetchSearchMovies(searchBy, 'genres', 'release_date')),
      ]);
    }
    return Promise.resolve(history.push('/404'));
  };
}
