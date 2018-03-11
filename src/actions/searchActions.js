import { TOOGLE_SEARCH_BY, SEARCH_BAR_INPUT_CHANGE } from './actionsTypes';

export const toogleSearchByAction = searchBy => ({
  type: TOOGLE_SEARCH_BY,
  searchBy,
});

export const handleSearchBarChangeAction = searchBarInput => ({
  type: SEARCH_BAR_INPUT_CHANGE,
  searchBarInput,
});
