import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import movies from './modules/movies/moviesReducer';
import movie from './modules/movie/movieReducer';
import filter from './modules/filter/filterReducer';
import rootSaga from './modules/saga';

const rootReducer = combineReducers({
  movies,
  filter,
  movie,
});

const sagaMiddleware = createSagaMiddleware();

export default (initialState) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  store.close = () => store.dispatch(END);

  return store;
};

// import {
//   createStore,
//   combineReducers,
//   compose,
//   applyMiddleware,
// } from 'redux';

// import thunk from 'redux-thunk';
// import movies from './modules/movies/moviesReducer';
// import movie from './modules/movie/movieReducer';
// import filter from './modules/filter/filterReducer';

// const rootReducer = combineReducers({
//   movies,
//   filter,
//   movie,
// });

// const initialState = {};

// export default () => createStore(
//   rootReducer,
//   initialState,
//   compose(
//     applyMiddleware(thunk),
//   ),
// );
