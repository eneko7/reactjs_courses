import { all } from 'redux-saga/effects';

import {
  moviesSaga,
} from './movies/moviesActions';

export default function* rootSaga() {
  yield all([
    moviesSaga(),
  ]);
}
