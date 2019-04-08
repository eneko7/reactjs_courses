import React from 'react';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import HeaderContainer from '../index';

const mockStore = configureMockStore();
const store = mockStore({
  filter: {
    searchRequest: 'test',
    sortBy: 'release_date',
    searchBy: 'title',
  },
  fetchSearchMovies: () => ('Hello'),
});

jest.mock('../Header', () => jest.fn().mockReturnValue(null));

describe('Header', () => {
  it('HeaderContainer.spec ', () => {
    TestRenderer.create(
      <Provider store={store}>
        <HeaderContainer />
      </Provider>,
    );
    expect(HeaderContainer).toBeCalledTimes(1);
  });
});
