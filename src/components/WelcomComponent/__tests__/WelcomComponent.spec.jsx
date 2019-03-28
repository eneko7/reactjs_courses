import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import WelcomComponent from '../WelcomComponent';

const renderer = new ShallowRenderer();
renderer.render(<WelcomComponent />);
describe('WelcomComponent', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
