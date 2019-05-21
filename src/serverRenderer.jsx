import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import Root from './components/Root';
import configureStore from './store';

function renderHTML(html, preloadedState) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link rel="shortcut icon" href="favicon.ico" />
          ${process.env.NODE_ENV === 'development' ? '' : '<link href="/css/main.css" rel="stylesheet" type="text/css">'}
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          <script src="/js/main.js"></script>
        </body>
      </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    // This context object contains the results of the render
    const context = {};

    const renderRoot = () => (
      <StaticRouter context={context} location={req.url}>
        <Provider store={store}>
          <Root />
        </Provider>
      </StaticRouter>
    );

    // store.runSaga().done.then(() => {
    const htmlString = renderToString(renderRoot());

    if (context.url) {
      res.writeHead(302, {
        Location: context.url,
      });
      res.end();
      return;
    }

    const preloadedState = store.getState();
    res.send(renderHTML(htmlString, preloadedState));
    // });

    renderToString(renderRoot());
    // store.close();
  };
}
