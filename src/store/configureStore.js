// @flow
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { saveState as postState } from '../api';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state : Object) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
    postState(state);
  } catch (error) {
    // Ignore write errors
  }
};

export const configureStore = (initialState : Object) => createStore(
  rootReducer,
  initialState,
  applyMiddleware(thunk),
);
