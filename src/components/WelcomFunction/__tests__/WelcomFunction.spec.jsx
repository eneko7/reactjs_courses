import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import WelcomFunction from '../WelcomFunction';

const renderer = new ShallowRenderer();
renderer.render(<WelcomFunction />);
describe('WelcomFunction', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
