import {
  DATA_REQUEST,
  DATA_SUCCESS,
  DATA_ERROR,
} from './moviesActions';

const initialState = {
  allMovies: [],
  errorMovies: {},
  isFetchingMovies: false,
  isFetchedMovies: false,
  url: '',
  offset: null,
  quantity: null,
  searchBy: 'title',
  sortBy: 'release_date',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SUCCESS:
      return {
        ...state,
        isFetchingMovies: false,
        isFetchedMovies: true,
        allMovies: action.payload.offset === 0
          ? action.payload.movies
          : state.allMovies.concat(action.payload.movies),
        url: action.payload.url,
        offset: action.payload.offset,
        quantity: action.payload.quantity,
        searchBy: action.payload.searchBy,
        sortBy: action.payload.sortBy,
        errorMovies: '',
      };
    case DATA_REQUEST:
      return {
        ...state,
        isFetchingMovies: true,
        isFetchedMovies: false,
      };
    case DATA_ERROR:
      return {
        ...state,
        errorMovies: action.payload,
        isFetchingMovies: false,
        isFetchedMovies: false,
        allMovies: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default moviesReducer;
