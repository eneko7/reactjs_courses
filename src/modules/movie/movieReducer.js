import {
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_ERROR,
} from './movieActions';

const initialState = {
  movie: {},
  errorMovie: {},
  isFetchingMovie: false,
  isFetchedMovie: false,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS:
      return {
        ...state,
        isFetchingMovie: false,
        isFetchedMovie: true,
        movie: action.payload.movie,
        errorMovie: '',
      };
    case MOVIE_REQUEST:
      return {
        ...state,
        isFetchingMovie: true,
        isFetchedMovie: false,
      };
    case MOVIE_ERROR:
      return {
        ...state,
        errorMovie: action.payload,
        isFetchingMovie: false,
        isFetchedMovie: false,
        movie: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
