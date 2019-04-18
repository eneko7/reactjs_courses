import * as selectors from '../movieSelectors';

const initialState = {
  movie: {},
  errorMovie: {},
  isFetchingMovie: false,
  isFetchedMovie: false,
};

describe('Movie Selectors', () => {
  const state = {
    movie: initialState,
  };
  it('getMovie selector', () => {
    expect(selectors.getMovie(state))
      .toEqual(state.movie.movie);
  });
  it('getIsFetchingMovie selector', () => {
    expect(selectors.getIsFetchingMovie(state))
      .toEqual(state.movie.isFetchingMovie);
  });
  it('getIsFetchedMovie selector', () => {
    expect(selectors.getIsFetchedMovie(state))
      .toEqual(state.movie.isFetchedMovie);
  });
  it('getErrorMovie selector', () => {
    expect(selectors.getErrorMovie(state))
      .toEqual(state.movie.errorMovie);
  });
});
