/* eslint-disable no-unused-vars */
import { createAction } from 'redux-actions';
import {
  call, put, all, takeEvery, takeLatest,
} from 'redux-saga/effects';
import { fetchSearchMovies } from '../movies/moviesActions';

export const DATA_SET = 'DATA_SET';

export const dataSet = createAction(DATA_SET);

export function* updateFilterSearch(searchBy) {
  yield put(dataSet({ searchBy }));
}

export function* updateFilterSort(searchRequest, searchBy, sortBy) {
  yield put(dataSet({ sortBy }));
  yield put(fetchSearchMovies(searchRequest, searchBy, sortBy));
}

export function* updateSearchRequest(searchRequest) {
  yield put(dataSet({ searchRequest }));
}

export function* watchFilter() {
  yield takeEvery('DATA_SET', updateSearchRequest);
  yield takeEvery('DATA_SET', updateFilterSort);
  yield takeEvery('DATA_SET', updateFilterSearch);
}

export function* filterSaga() {
  yield all([
    watchFilter(),
  ]);
}
