import * as selectors from '../filterSelectors';

const initialState = {
  searchBy: 'title',
  sortBy: 'release_date',
  searchRequest: '',
};

describe('Filter Selectors', () => {
  const state = {
    filter: initialState,
  };
  it('getSearchBy selector', () => {
    expect(selectors.getSearchBy(state))
      .toEqual(state.filter.searchBy);
  });
  it('getSortBy selector', () => {
    expect(selectors.getSortBy(state))
      .toEqual(state.filter.sortBy);
  });
  it('getSearchRequest selector', () => {
    expect(selectors.getSearchRequest(state))
      .toEqual(state.filter.searchRequest);
  });
});
