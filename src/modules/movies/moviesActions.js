/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import { createAction } from 'redux-actions';
import {
  call, put, all, takeEvery, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

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

export function fetchMovies(url, offset = 0, searchBy = 'title', sortBy = 'release_date') {
  return (dispatch) => {
    dispatch(dataRequest());
    return axios.get(`${url}&sortBy=${sortBy}&searchBy=${searchBy}&offset=${offset}`)
      .then((response) => {
        dispatch(dataSuccess({
          movies: response.data.data, quantity: response.data.total, searchBy, sortBy, url, offset,
        }));
      })
      .catch(error => dispatch(dataError(error.message)));
  };
}

// export function fetchMovies(url, offset = 0, searchBy = 'title', sortBy = 'release_date') {
//   return async (dispatch) => {
//     dispatch(dataRequest());
//     try {
//       const response = await axios.get(`${url}&sortBy=${sortBy}&searchBy=${searchBy}&offset=${offset}`);
//       return dispatch(dataSuccess({
//         movies: response.data.data, quantity: response.data.total, searchBy, sortBy, url, offset,
//       }));
//     } catch (error) {
//       return dispatch(dataError(error.message));
//     }
//   };
// }

// export function* fetchMovies(url, offset = 0, searchBy = 'title', sortBy = 'release_date') {
//   console.log('test');
//   // try {
//   // yield put(dataRequest());
//   const data = yield call(axios.get(`${url}&sortBy=${sortBy}&searchBy=${searchBy}&offset=${offset}`));
//   console.log(data);
//   yield put(dataSuccess({
//     ...data, searchBy, sortBy, url, offset,
//   }));
//   // } catch (error) {
//   //   yield put(dataError(error.message));
//   // }
// }

export function fetchSearchMovies(searchRequest, searchBy, sortBy) {
  return (dispatch) => {
    if (searchBy === 'genres') {
      dispatch(fetchMovies(`${urlSearchMovies}&filter=${searchRequest}`, 0, searchBy, sortBy));
    } else {
      dispatch(fetchMovies(`${urlSearchMovies}&search=${searchRequest}`, 0, searchBy, sortBy));
    }
  };
}

function* watchFetchMovies() {
  yield call(fetchSearchMovies);
}

export function fetchDefaultMovies() {
  return (dispatch) => {
    dispatch(fetchMovies(urlDefaultMoviesList));
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

export function* moviesSaga() {
  yield all([
    watchFetchMovies(),
  ]);
}
