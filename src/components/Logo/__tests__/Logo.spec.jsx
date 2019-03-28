import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Logo from '../Logo';

const renderer = new ShallowRenderer();
renderer.render(<Logo />);
describe('Logo', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
