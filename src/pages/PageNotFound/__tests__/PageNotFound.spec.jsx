import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import PageNotFound from '../PageNotFound';

const renderer = new ShallowRenderer();
describe('PageNotFound', () => {
  it('renders correctly', () => {
    renderer.render(<PageNotFound />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
