import reducer from '../filterReducer';
import * as actions from '../filterActions';

const initialState = {
  searchBy: 'title',
  sortBy: 'release_date',
  searchRequest: '',
};

describe('Filter Reducers', () => {
  it('filter search succeed', () => {
    expect(reducer(initialState, actions.updateFilterSearch('release_date')))
      .toEqual({
        ...initialState,
      });
  });

  it('filter sort succeed', () => {
    expect(reducer(initialState, actions.updateFilterSort('title')))
      .toEqual({
        ...initialState,
      });
  });

  it('filter search succeed', () => {
    expect(reducer(undefined, {
      type: 'DATA_SET',
    })).toEqual(initialState);
  });
});
