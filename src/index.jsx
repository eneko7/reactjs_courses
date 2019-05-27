import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import getStore from './store';
import Root from './components/Root';

const store = getStore(window.PRELOADED_STATE);

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();
