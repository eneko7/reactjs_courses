import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actions from '../filterActions';
import * as actionsMovies from '../../movies/moviesActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('filter actions', () => {
  beforeEach(() => moxios.install());

  afterEach(() => moxios.uninstall());

  it('update search filter', (done) => {
    const expectedActions = [
      { type: actions.DATA_SET, payload: { searchBy: 'title' } },
    ];

    const store = mockStore({});

    store.dispatch(actions.updateFilterSearch('title'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('update sort filter', (done) => {
    const expectedActions = [
      { type: actions.DATA_SET, payload: { sortBy: 'release_date' } },
      { type: actionsMovies.DATA_REQUEST },
    ];

    const store = mockStore({});

    store.dispatch(actions.updateFilterSort('test', 'title', 'release_date'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });

  it('update search request', (done) => {
    const expectedActions = [
      { type: actions.DATA_SET, payload: { searchRequest: 'test' } },
    ];

    const store = mockStore({});

    store.dispatch(actions.updateSearchRequest('test'));
    moxios.wait(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
