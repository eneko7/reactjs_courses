import React from 'react';
// import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Root from './components/Root';
import configureStore from './store';

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <BrowserRouter location={['/']} context={null}>
    <Provider store={store}>
      {/* <Suspense fallback={<Loader />}> */}
      <Root />
      {/* </Suspense> */}
    </Provider>
  </BrowserRouter>
);

hydrate(root, document.getElementById('root'));
