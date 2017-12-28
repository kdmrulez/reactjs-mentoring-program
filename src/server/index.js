require('import-export');
require('babel-core/register');

const express = require('express');
const path = require('path');
const React = require('react');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { configureStore, loadState, saveState } = require('../store/configureStore');
const fs = require('fs');
const http = require('http');
const App = require('../../build/static/js/main.b785193b').default;

const staticFiles = [
  '/static/*',
  '/logo.svg',
  '/asset-manifest.json',
  '/favicon.ico',
];

const app = express();
app.server = http.createServer(app);

staticFiles.forEach((file) => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../../build', req.url);
    res.sendFile(filePath);
  });
});


app.get('*', async (req, res) => {
  const htmlFilePath = path.join(__dirname, '../../build', 'index.html');
  const error = () => res.status(404).send('404');
  fs.readFile(htmlFilePath, 'utf8', (err, htmlData) => {
    if (err) {
      error();
    } else {
      const context = {};
      if (context.url) {
        res.redirect(301, context.url);
      } else {
        const persistedState = loadState();
        const store = configureStore(persistedState);
        store.subscribe(() => saveState(store.getState()));
        const ProviderElement = React.createElement(
          Provider,
          { store },
          React.createElement(App),
        //  App,
        );
        const StaticRouterElement = React.createElement(
          StaticRouter,
          { location: req.url, context },
          ProviderElement,
        );
        const appMarkup = renderToString(StaticRouterElement);
        const renderedApp = htmlData.replace('{{SSR}}', appMarkup);
        res.status(200).send(renderedApp);
      }
    }
  });
});

app.listen(3000, () => console.log('Listening on localhost:3000'));
