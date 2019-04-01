import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ImagePoster from '../ImagePoster';

const renderer = new ShallowRenderer();
const data = {
  src: 'test',
  alt: 'test',
};
renderer.render(<ImagePoster {...data} />);
describe('ImagePoster', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
