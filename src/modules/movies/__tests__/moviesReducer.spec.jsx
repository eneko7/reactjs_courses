import reducer from '../moviesReducer';
import * as actions from '../moviesActions';

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

const mockData = {
  allMovies: [{ id: 442249 }, { id: 454233 }],
  quantity: 2,
  searchBy: 'title',
  sortBy: 'release_date',
  url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21',
  offset: 0,
};
const mockData2 = {
  allMovies: [{ id: 442249 }, { id: 454233 }],
  quantity: 2,
  searchBy: 'title',
  sortBy: 'release_date',
  url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21',
  offset: 22,
};

describe('Movies Reducers', () => {
  it('Movies success', () => {
    expect(reducer(initialState, actions.dataSuccess(mockData)))
      .toEqual({
        isFetchingMovies: false,
        isFetchedMovies: true,
        allMovies: mockData.allMovies,
        url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21',
        offset: 0,
        quantity: 2,
        searchBy: 'title',
        sortBy: 'release_date',
        errorMovies: '',
      });
  });

  it('Movies success next page', () => {
    expect(reducer(initialState, actions.dataSuccess(mockData2)))
      .toEqual({
        isFetchingMovies: false,
        isFetchedMovies: true,
        allMovies: mockData2.allMovies,
        url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21',
        offset: 22,
        quantity: 2,
        searchBy: 'title',
        sortBy: 'release_date',
        errorMovies: '',
      });
  });

  it('Movies request', () => {
    expect(reducer(initialState, actions.dataRequest()))
      .toEqual({
        ...initialState,
        isFetchingMovies: true,
        isFetchedMovies: false,
      });
  });

  it('Movies error', () => {
    expect(reducer(initialState, actions.dataError(true)))
      .toEqual({
        ...initialState,
        errorMovies: true,
        isFetchingMovies: false,
        isFetchedMovies: false,
        allMovies: [],
      });
  });

  it('without any actions', () => {
    expect(reducer(initialState, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });

  it('without state', () => {
    expect(reducer(undefined, {
      type: 'FAKE_ACTION',
    })).toEqual(initialState);
  });
});
