import reducer from '../movieReducer';
import * as actions from '../movieActions';

const initialState = {
  movie: {},
  errorMovie: {},
  isFetchingMovie: false,
  isFetchedMovie: false,
};

const mockData = {
  movie: {
    id: 511679,
    title: 'Héctor El Father: Conocerás la verdad',
    tagline: '',
    vote_average: 8.8,
    vote_count: 5,
    release_date: '2018-03-22',
    poster_path: 'https://image.tmdb.org/t/p/w500/jwJoURyfm4XxtnYRtIOS2pYR9Np.jpg',
    overview: '',
    budget: 0,
    revenue: 0,
    genres: [
      'Drama',
    ],
    runtime: 90,
  },
};

describe('Movie Reducers', () => {
  it('movie search request', () => {
    expect(reducer(initialState, actions.movieRequest()))
      .toEqual({
        movie: {},
        errorMovie: {},
        isFetchingMovie: true,
        isFetchedMovie: false,
      });
  });
  it('movie search success', () => {
    expect(reducer(initialState, actions.movieSuccess(mockData)))
      .toEqual({
        ...mockData,
        errorMovie: '',
        isFetchingMovie: false,
        isFetchedMovie: true,
      });
  });

  it('movie search error', () => {
    expect(reducer(initialState, actions.movieError(mockData)))
      .toEqual({
        errorMovie: mockData,
        isFetchingMovie: false,
        isFetchedMovie: false,
        movie: {},
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
