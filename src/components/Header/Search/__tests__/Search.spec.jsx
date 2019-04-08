import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Search from '../Search';

const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
  sortBy: 'release_date',
  searchBy: 'title',
  searchRequest: 'test',
  fetchSearchMovies: () => ('Hello'),
  updateSearchRequest: () => ('Hello'),
};

const dataForGenres = {
  sortBy: 'release_date',
  searchBy: 'genres',
  searchRequest: 'test',
  fetchSearchMovies: () => ('Hello'),
  updateSearchRequest: () => ('Hello'),
};

const store = mockStore({
  sortBy: 'release_date',
  searchBy: 'title',
  searchRequest: 'test',
});

describe('Search render', () => {
  it('renders with title correctly', () => {
    const component = shallow.render(
      <Provider store={store}>
        <Search {...data} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
  it('renders with genres correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Search {...dataForGenres} />
      </Provider>,
      {
        createNodeMock: (element) => {
          if (element.type === 'input') {
            return {
              value: 'Action',
            };
          }
          return null;
        },
      },
    );
    const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    component.root.findByProps({ className: 'search_input' }).props.onChange(event);
    expect(component).toMatchSnapshot();
  });
  it('change input value correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Search {...data} />
      </Provider>,
      {
        createNodeMock: (element) => {
          if (element.type === 'input') {
            return {
              value: 'word',
            };
          }
          return null;
        },
      },
    );
    const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    component.root.findByProps({ className: 'search_input' }).props.onChange(event);
    expect(component).toMatchSnapshot();
  });

  it('click on icon correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <Search {...data} />
      </Provider>,
      {
        createNodeMock: (element) => {
          if (element.type === 'input') {
            return {
              value: 'word',
            };
          }
          return null;
        },
      },
    );
    const event = { stopPropagation: jest.fn(), preventDefault: jest.fn() };
    component.root.findByProps({ className: 'search_icon' }).props.onClick(event);
    expect(component).toMatchSnapshot();
  });
});
