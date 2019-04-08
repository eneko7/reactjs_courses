// import React from 'react';
// import ShallowRenderer from 'react-test-renderer/shallow';
// import TestRenderer from 'react-test-renderer';
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// // import moxios from 'moxios';
// import { Provider } from 'react-redux';
// import Button from '../Button';
// // import { fetchSearchMovies } from '../../../modules/movies/moviesActions';

// const renderer = new ShallowRenderer();
// const data = {
//   text: 'text',
//   searchRequest: 'test',
//   sortBy: 'release_date',
//   searchBy: 'title',
// };
// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const store = mockStore({
//   searchRequest: 'test',
//   sortBy: 'release_date',
//   searchBy: 'title',
// });

// describe('Button', () => {
//   it('renders correctly', () => {
//     renderer.render(
//       <Provider store={store}>
//         <Button {...data} fetchSearchMovies={() => ('Hello')} />
//       </Provider>,
//     );
//     const result = renderer.getRenderOutput();
//     expect(result).toMatchSnapshot();
//   });

//   it('click render', () => {
//     const component = TestRenderer.create(
//       <Provider store={store}>
//         <Button {...data} fetchSearchMovies={() => ('Hello')} />
//       </Provider>,
//     );
//     component.root.findByProps({ className: 'header_button' }).props.onClick();
//     expect(component).toMatchSnapshot();
//   });
// });

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
    renderer.render(<Button {...data} />);
    const result = renderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
});
