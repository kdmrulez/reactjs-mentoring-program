require('import-export');
require('babel-core/register');

const express = require('express');
const path = require('path');
const React = require('react');
const { Provider } = require('react-redux');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const fs = require('fs');
const http = require('http');
const bodyParser = require('body-parser');
const { configureStore } = require('../store/configureStore');
const App = require('../../build/static/js/main.48ae6f00.js').default;

const staticFiles = [
  '/static/*',
  '/logo.svg',
  '/asset-manifest.json',
  '/favicon.ico',
];

const app = express();
let state = {
  fetchMovies: [],
  fetchMoviesErrors: null,
  searchBarInput: '',
  searchBy: 'director',
  sortBy: 'releaseDate',
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.server = http.createServer(app);

staticFiles.forEach((file) => {
  app.get(file, (req, res) => {
    const filePath = path.join(__dirname, '../../build', req.url);
    res.sendFile(filePath);
  });
});

app.post('/saveState', async (req, res) => {
  state = req.body;
  res.status(200).send();
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
        const store = configureStore(state);
        const ProviderElement = React.createElement(
          Provider,
          { store },
          React.createElement(App),
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
