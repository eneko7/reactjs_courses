import { DATA_SET } from './filterActions';

const initialState = {
  searchBy: 'title',
  sortBy: 'release_date',
  searchRequest: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_SET:
      return Object.assign(initialState, action.payload);
    default:
      return {
        ...state,
      };
  }
};

export default filterReducer;
