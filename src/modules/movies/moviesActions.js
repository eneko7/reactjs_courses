/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { createAction } from 'redux-actions';
import {
  call, put, all, takeEvery, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';
import configureStore from '../../store';

export const urlDefaultMoviesList = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21';
export const urlSortMoviesList = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&searchBy=title&limit=21';
export const urlSearchMovies = 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21';

export const DATA_REQUEST = 'DATA_REQUEST';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';
export const FETCH_FILMS = 'FETCH_FILMS';

export const dataRequest = createAction(DATA_REQUEST);
export const dataSuccess = createAction(DATA_SUCCESS);
export const dataError = createAction(DATA_ERROR);

// export function fetchMovies(url, offset = 0, searchBy = 'title', sortBy = 'release_date') {
//   return (dispatch) => {
//     dispatch(dataRequest());
//     return axios.get(`${url}&sortBy=${sortBy}&searchBy=${searchBy}&offset=${offset}`)
//       .then((response) => {
//         dispatch(dataSuccess({
//           movies: response.data.data, quantity: response.data.total, searchBy, sortBy, url, offset,
//         }));
//       })
//       .catch(error => dispatch(dataError(error.message)));
//   };
// }
// export const fetchMovies = (url, offset = 0, searchBy = 'title', sortBy = 'release_date') => (dispatch) => {
//   dispatch(dataRequest());
//   return axios.get(`${url}&sortBy=${sortBy}&searchBy=${searchBy}&offset=${offset}`)
//     .then((response) => {
//       dispatch(dataSuccess({
//         movies: response.data.data, quantity: response.data.total, searchBy, sortBy, url, offset,
//       }));
//     })
//     .catch(error => dispatch(dataError(error.message)));
// };

export function* fetchMovies(
  url, offset = 0, searchBy = 'title', sortBy = 'release_date',
) {
  try {
    const response = yield axios.get(`${urlSearchMovies}&sortBy=${sortBy}&searchBy=${searchBy}&offset=${offset}`)
      .then(res => res.data);
    yield put(dataSuccess({
      movies: response.data, quantity: response.total, searchBy, sortBy, url, offset,
    }));
  } catch (error) {
    yield put(dataError(error.message));
  }
}

export function* fetchSearchMovies(searchRequest, searchBy, sortBy) {
  if (searchBy === 'genres') {
    yield put(fetchMovies(`${urlSearchMovies}&filter=${searchRequest}`, 0, searchBy, sortBy));
  } else {
    yield put(fetchMovies(`${urlSearchMovies}&search=${searchRequest}`, 0, searchBy, sortBy));
  }
}

export function fetchDefaultMovies() {
  return (dispatch) => {
    dispatch(fetchMovies(urlDefaultMoviesList));
  };
}

export function* fetchNextMovies() {
  const store = configureStore();
  const state = store.getState();
  if (state.movies.offset !== -1) {
    yield put(fetchMovies(
      state.movies.url,
      state.movies.offset + 22,
    ));
  }
}

export function* watchMovies() {
  yield call(fetchMovies);
  yield takeEvery(DATA_REQUEST, fetchNextMovies);
  yield takeEvery(DATA_REQUEST, fetchSearchMovies);
}

export function* moviesSaga() {
  yield all([
    watchMovies(),
  ]);
}
