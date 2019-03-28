import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SearchBy from '../SearchBy';

const renderer = new ShallowRenderer();
renderer.render(<SearchBy />);
describe('SearchBy', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
