import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MovieDetailsPage from '../MovieDetailsPage';

const renderer = new ShallowRenderer();
describe('MovieDetailsPage', () => {
  it('renders correctly', () => {
    renderer.render(<MovieDetailsPage />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
