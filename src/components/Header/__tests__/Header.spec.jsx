import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Header from '../Header';

const renderer = new ShallowRenderer();
renderer.render(<Header />);
describe('Header', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
