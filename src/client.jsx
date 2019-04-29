import React, { Suspense } from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Loader from './components/Loading';
import configureStore from './store';

const Root = React.lazy(() => import('./components/Root'));

const store = configureStore(window.PRELOADED_STATE);

const root = (
  <BrowserRouter location={['/']} context={null}>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Root />
      </Suspense>
    </Provider>
  </BrowserRouter>
);

hydrate(root, document.getElementById('root'));
