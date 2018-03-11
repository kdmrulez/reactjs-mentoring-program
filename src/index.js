import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { configureStore, loadState, saveState } from './store/configureStore';


if (typeof document !== 'undefined') {
  const persistedState = loadState();
  const store = configureStore(persistedState);
  store.subscribe(() => saveState(store.getState()));
  ReactDOM.hydrate(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    document.getElementById('root'),
  );
}

export default App;
