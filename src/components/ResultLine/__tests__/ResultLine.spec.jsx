import React from 'react';
import { MemoryRouter } from 'react-router';
import TestRenderer from 'react-test-renderer';
import ResultLine from '../ResultLine';

jest.mock('../../SortInput/SortInputContainer', () => () => <div>test</div>);

describe('ResultLine', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(
      <MemoryRouter>
        <ResultLine location={{ pathname: 'test' }} searchBy="title" sortBy="release_date" />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const component = TestRenderer.create(
      <MemoryRouter>
        <ResultLine location={{ pathname: 'test' }} searchRequest="test" searchBy="title" sortBy="release_date" />
      </MemoryRouter>,
    );
    expect(component).toMatchSnapshot();
  });
});
