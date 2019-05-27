import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';
import movies from './modules/movies/moviesReducer';
import movie from './modules/movie/movieReducer';
import filter from './modules/filter/filterReducer';

const rootReducer = combineReducers({
  movies,
  filter,
  movie,
});

export default initialState => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    global.window && global.window.devToolsExtension ? global.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);
