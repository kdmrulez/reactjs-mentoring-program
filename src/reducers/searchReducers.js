import { TITLE } from '../constants/';
import { TOOGLE_SEARCH_BY, SEARCH_BAR_INPUT_CHANGE } from '../actions';

export const searchBy = (state = TITLE, action) => {
  switch (action.type) {
    case TOOGLE_SEARCH_BY:
      return action.searchBy;
    default:
      return state;
  }
};

export const searchBarInput = (state = '', action) => {
  switch (action.type) {
    case SEARCH_BAR_INPUT_CHANGE:
      return action.searchBarInput;
    default:
      return state;
  }
};
