// @flow
import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MovieHeader from './components/headers/movieHeader';
import SearchHeader from './components/headers/searchHeader';
import SubNav from './components/subNav/';
import Footer from './components/footer';
import MovieItems from './components/movieItems';
import { wrapperContent } from './App.css';

const App = () => (
  <div>
    <div className={wrapperContent}>
      <Switch>
        <Route
          path="/"
          exact
          render={() => <div><SearchHeader /> <SubNav withSortSection /></div>}
        />
        <Route
          path="/film/:id"
          render={props => <div><MovieHeader {...props} /> <SubNav withoutSortSection /></div>}
        />
        <Route
          path="/search"
          exact
          render={() => <div><SearchHeader /> <SubNav withSortSection /></div>}
        />
        <Redirect to="/" />
      </Switch>
      <MovieItems />
    </div>
    <Footer />
  </div>
);

export default App;
