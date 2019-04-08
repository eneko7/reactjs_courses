import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import SortInput from '../SortInput';


const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  searchBy: 'title',
  sortBy: 'release_date',
  searchRequest: 'test',
});
const data = {
  name: 'name',
  text: 'text',
  id: 'id',
  inputClass: 'inputClass',
  labelClass: 'labelClass',
  defaultChecked: true,
  searchBy: 'title',
  sortBy: 'release_date',
  searchRequest: 'test',
  updateFilterSearch: () => ('Hello'),
  updateSearchRequest: () => ('Hello'),
  updateFilterSort: () => ('Hello'),
  fetchSearchMovies: () => ('Hello'),
};


describe('MoviesGrid', () => {
  it('renders correctly', () => {
    const component = shallow.render(
      <Provider store={store}>
        <SortInput {...data} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('change radio correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <SortInput {...data} />
      </Provider>,
    );
    const event = {
      target: {
        value: 'title',
        name: 'searchBy',
      },
    };
    component.root.findByProps({ className: 'inputClass' }).props.onChange(event);
    expect(component).toMatchSnapshot();
  });

  it('change radio correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <SortInput {...data} />
      </Provider>,
    );
    const event = {
      target: {
        value: 'release_date',
        name: 'sortBy',
      },
    };
    component.root.findByProps({ className: 'inputClass' }).props.onChange(event);
    expect(component).toMatchSnapshot();
  });

  // it('change radio correctly', () => {
  //   const component = TestRenderer.create(
  //     <Provider store={store}>
  //       <SortInput {...data} />
  //     </Provider>,
  //   );
  //   console.log(component);
  //   component.root.findByProps({ className: 'sort_by_input' }).props.onChange();
  //   expect(component).toMatchSnapshot();
  // });
});
