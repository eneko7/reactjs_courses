import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Search from '../Search';

const renderer = new ShallowRenderer();
renderer.render(<Search />);
describe('Search', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
