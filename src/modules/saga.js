import { all } from 'redux-saga/effects';

import { moviesSaga } from './movies/moviesActions';
import { filterSaga } from './filter/filterActions';

export default function* rootSaga() {
  yield all([
    moviesSaga(),
    filterSaga(),
  ]);
}
