import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Genres from '../Genres';

const renderer = new ShallowRenderer();
const data = ['Drama', 'History', 'Comedy'];
const failedData = [];
describe('Genres', () => {
  it('renders correctly', () => {
    renderer.render(<Genres data={data} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('renders with failed data correctly', () => {
    renderer.render(<Genres data={failedData} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
