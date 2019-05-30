import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../movieActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = {
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
};
describe('getFilms actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success fetch movie', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: { ...mockData },
    });

    const expectedActions = [
      { type: actions.MOVIE_SUCCESS, payload: { movie: mockData } },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchMovie(511679));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('failed fetch genres', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      {
        type: actions.MOVIE_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchMovie(0));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
