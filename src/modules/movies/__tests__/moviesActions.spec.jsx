import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../moviesActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockData = {
  movies: undefined,
  quantity: undefined,
  searchBy: 'title',
  sortBy: 'release_date',
  url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21',
  offset: 0,
};

const mockDataTitle = {
  movies: undefined,
  quantity: undefined,
  searchBy: 'title',
  sortBy: 'release_date',
  url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21&search=test',
  offset: 0,
};

const mockDataGenres = {
  movies: undefined,
  quantity: undefined,
  searchBy: 'genres',
  sortBy: 'release_date',
  url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21&filter=action',
  offset: 0,
};

describe('filter actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('success FETCH_DATA', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: mockData,
    });

    const expectedActions = [
      { type: actions.DATA_REQUEST },
      {
        type: actions.DATA_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchMovies('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21', 0, 'title', 'release_date'));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success FETCH_DATA', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: mockData,
    });

    const expectedActions = [
      { type: actions.DATA_REQUEST },
      {
        type: actions.DATA_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchMovies('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21', 0, 'title', 'release_date'));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success FETCH_DEFAULT_DATA', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: mockData,
    });

    const expectedActions = [
      { type: actions.DATA_REQUEST },
      {
        type: actions.DATA_SUCCESS,
        payload: mockData,
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchDefaultMovies('https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21'));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success FETCH_SEARCH_DATA by title', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: mockDataTitle,
    });

    const expectedActions = [
      { type: actions.DATA_REQUEST },
      {
        type: actions.DATA_SUCCESS,
        payload: mockDataTitle,
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchSearchMovies('test', 'title', 'release_date'));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success FETCH_SEARCH_DATA by genres', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: mockDataGenres,
    });

    const expectedActions = [
      { type: actions.DATA_REQUEST },
      {
        type: actions.DATA_SUCCESS,
        payload: mockDataGenres,
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchSearchMovies('action', 'genres', 'release_date'));

    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('success fetch next films', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: mockData,
    });

    const expectedActions = [
      { type: actions.DATA_REQUEST },
      {
        type: actions.DATA_SUCCESS,
        payload: {
          movies: undefined,
          quantity: undefined,
          url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21',
          offset: 22,
          sortBy: 'release_date',
          searchBy: 'title',
        },
      },
    ];

    const store = mockStore({
      movies: {
        url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21',
        offset: 0,
        sortBy: 'release_date',
        searchBy: 'title',
        quantity: undefined,
        movies: [],
      },
    });

    store.dispatch(actions.fetchNextMovies());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('failed fetch next films', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 200,
      response: mockData,
    });

    const expectedActions = [];

    const store = mockStore({ movies: { url: 'https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&limit=21', offset: -1 } });

    store.dispatch(actions.fetchNextMovies());
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('failed fetch films', (done) => {
    moxios.stubRequest(/reactjs-cdp.herokuapp.com/, {
      status: 500,
      response: 'error',
    });

    const expectedActions = [
      { type: actions.DATA_REQUEST },
      {
        type: actions.DATA_ERROR,
        payload: 'Request failed with status code 500',
      },
    ];

    const store = mockStore({});

    store.dispatch(actions.fetchMovies('https://reactjs-cdp.herokuapp.com/'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
