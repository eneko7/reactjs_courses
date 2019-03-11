import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import WelcomPureComponent from '../WelcomPureComponent';

const renderer = new ShallowRenderer();
renderer.render(<WelcomPureComponent />);
describe('WelcomPureComponent', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
