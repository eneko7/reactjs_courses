import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ResultLine from '../ResultLine';

const renderer = new ShallowRenderer();
renderer.render(<ResultLine />);
describe('ResultLine', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
