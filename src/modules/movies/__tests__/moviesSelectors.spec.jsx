import * as selectors from '../moviesSelectors';

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

describe('Movies Selectors', () => {
  const state = {
    movies: initialState,
  };
  it('getMovies selector', () => {
    expect(selectors.getMovies(state))
      .toEqual(state.movies.allMovies);
  });
  it('getQuantityMovies selector', () => {
    expect(selectors.getQuantityMovies(state))
      .toEqual(state.movies.quantity);
  });
  it('getIsFetchingMovies selector', () => {
    expect(selectors.getIsFetchingMovies(state))
      .toEqual(state.movies.isFetchingMovies);
  });
  it('getIsFetchedMovies selector', () => {
    expect(selectors.getIsFetchedMovies(state))
      .toEqual(state.movies.isFetchedMovies);
  });
  it('getErrorMovies selector', () => {
    expect(selectors.getErrorMovies(state))
      .toEqual(state.movies.errorMovies);
  });
});
