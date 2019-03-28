import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../App';

const renderer = new ShallowRenderer();
renderer.render(<App />);
describe('App', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
