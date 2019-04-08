import React from 'react';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import SortInputContainer from '../index';

const mockStore = configureMockStore();
const store = mockStore({
  filter: {
    searchBy: 'title',
    sortBy: 'release_date',
    searchRequest: 'test',
  },
  updateFilterSearch: () => ('Hello'),
  updateSearchRequest: () => ('Hello'),
  updateFilterSort: () => ('Hello'),
  fetchSearchMovies: () => ('Hello'),
});

jest.mock('../SortInput', () => jest.fn().mockReturnValue(null));

describe('SortInput', () => {
  it('SortInputContainer.spec ', () => {
    TestRenderer.create(
      <Provider store={store}>
        <SortInputContainer />
      </Provider>,
    );
    expect(SortInputContainer).toBeCalledTimes(1);
  });
});
