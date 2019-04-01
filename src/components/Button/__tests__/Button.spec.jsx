import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../Button';

const renderer = new ShallowRenderer();
const data = {
  text: 'text',
};
renderer.render(<Button {...data} />);
describe('Button', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
