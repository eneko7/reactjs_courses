import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MoviesPage from '../MoviesPage';

const renderer = new ShallowRenderer();
describe('MoviesPage', () => {
  it('renders correctly', () => {
    renderer.render(<MoviesPage />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
