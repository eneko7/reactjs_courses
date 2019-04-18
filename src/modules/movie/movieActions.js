import { createAction } from 'redux-actions';
import axios from 'axios';

export const MOVIE_REQUEST = 'MOVIE_REQUEST';
export const MOVIE_SUCCESS = 'MOVIE_SUCCESS';
export const MOVIE_ERROR = 'MOVIE_ERROR';

export const url = 'https://reactjs-cdp.herokuapp.com/movies/';

export const movieRequest = createAction(MOVIE_REQUEST);
export const movieSuccess = createAction(MOVIE_SUCCESS);
export const movieError = createAction(MOVIE_ERROR);

export const fetchMovie = movieId => (dispatch) => {
  dispatch(movieRequest);
  return axios.get(`${url}${movieId}`)
    .then((response) => {
      dispatch(movieSuccess({
        movie: response.data,
      }));
    })
    .catch(error => dispatch(movieError(error.message)));
};
