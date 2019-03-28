import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MoviesGrid from '../MoviesGrid';

const renderer = new ShallowRenderer();
renderer.render(<MoviesGrid />);
describe('MoviesGrid', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
