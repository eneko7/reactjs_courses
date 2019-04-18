import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Button from '../Button';

const renderer = new ShallowRenderer();
const data = {
  text: 'text',
  onClick: () => ('Hello'),
};

describe('Button', () => {
  it('renders correctly', () => {
    renderer.render(<Button {...data} classButton="details_button" />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
