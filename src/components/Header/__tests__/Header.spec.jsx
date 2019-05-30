import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import Header from '../Header';

const renderer = new ShallowRenderer();
const data = {
  searchRequest: 'test',
  sortBy: 'release_date',
  searchBy: 'title',
};
const failedData = {
  searchRequest: '',
  sortBy: 'release_date',
  searchBy: 'title',
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  searchRequest: 'test',
  filter: {
    sortBy: 'release_date',
    searchBy: 'title',
  },
});
const failedStore = mockStore({
  searchRequest: '',
  filter: {
    sortBy: 'release_date',
    searchBy: 'title',
  },
});
jest.mock('../../SortInput', () => () => <div>test</div>);
const historyMock = { push: jest.fn() };

describe('Header', () => {
  it('renders correctly', () => {
    renderer.render(
      <Provider store={store}>
        <MemoryRouter>
          <Header {...data} fetchSearchMovies={() => ('Hello')} history={historyMock} />
        </MemoryRouter>
      </Provider>,
    );
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('click render', () => {
    const component = TestRenderer.create(
      <Provider store={failedStore}>
        <MemoryRouter>
          <Header {...failedData} fetchSearchMovies={() => ('Hello')} history={historyMock} />
        </MemoryRouter>
      </Provider>,
    );
    component.root.findByProps({ className: 'header_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });

  it('click render', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Header {...data} fetchSearchMovies={() => ('Hello')} history={historyMock} />
        </MemoryRouter>
      </Provider>,
    );
    component.root.findByProps({ className: 'header_button' }).props.onClick();
    expect(component).toMatchSnapshot();
  });
});
