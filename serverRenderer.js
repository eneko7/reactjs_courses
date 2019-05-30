import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import urlapi from 'url';
import Root from './src/components/Root';
import createStore from './src/store';
import { fetchMoviesByRoute } from './src/modules/movies/moviesActions';

function renderHTML(html, preloadedState) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <title>ReactJS - Homework</title>
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
      <script src="/js/runtime.js"></script>
      <script src="/js/vendors.js"></script>
    </body>
    </html>      
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const context = { };
    const store = createStore();

    const url = urlapi.parse(req.url);
    const { pathname, search } = url;
    const filmID = pathname.match(/movie\/([0-9]+)/) ? pathname.match(/movie\/([0-9]+)/)[1] : null;
    const match = { params: { id: filmID } };
    const history = {
      location: { pathname },
      push: (link) => {
        res.set('location', link);
      },
    };
    const location = {
      search,
    };

    const renderRoot = () => (
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <Root />
        </StaticRouter>
      </Provider>
    );
    store.dispatch(fetchMoviesByRoute(location, history, match))
      .then(() => {
        const htmlString = renderToString(renderRoot());
        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }

        const reduxState = store.getState();

        res.send(renderHTML(htmlString, reduxState));
      });
  };
}
