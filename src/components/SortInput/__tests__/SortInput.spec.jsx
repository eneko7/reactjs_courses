import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import SortInput from '../SortInput';

const renderer = new ShallowRenderer();
const data = {
  name: 'name',
  text: 'text',
  id: 'id',
  inputClass: 'inputClass',
  labelClass: 'labelClass',
  defaultChecked: 'defaultChecked',
};
renderer.render(<SortInput {...data} />);
describe('SortInput', () => {
  it('renders correctly', () => {
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
