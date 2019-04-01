import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SortBy from '../SortBy';

const renderer = new ShallowRenderer();
renderer.render(<SortBy />);
describe('SortBy', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
