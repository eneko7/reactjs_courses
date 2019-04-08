import { createAction } from 'redux-actions';
import { fetchSearchMovies } from '../movies/moviesActions';

export const DATA_SET = 'DATA_SET';

export const dataSet = createAction(DATA_SET);

export const updateFilterSearch = searchBy => (dispatch) => {
  dispatch(dataSet({ searchBy }));
};

export const updateFilterSort = (searchRequest, searchBy, sortBy) => (dispatch) => {
  dispatch(dataSet({ sortBy }));
  dispatch(fetchSearchMovies(searchRequest, searchBy, sortBy));
};

export const updateSearchRequest = searchRequest => (dispatch) => {
  dispatch(dataSet({ searchRequest }));
};
