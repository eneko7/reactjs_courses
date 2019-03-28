import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Loading from '../Loading';

const renderer = new ShallowRenderer();
renderer.render(<Loading />);
describe('Loading', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
