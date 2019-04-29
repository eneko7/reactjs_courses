import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import getStore from './store';
import Loader from './components/Loading';
// import Root from './components/Root';
const Root = React.lazy(() => import('./components/Root'));

const store = getStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense fallback={<Loader />}>
        <Root />
      </Suspense>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

module.hot.accept();
