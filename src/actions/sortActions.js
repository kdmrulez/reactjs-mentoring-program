import { TOOGLE_SORT_BY } from './actionsTypes';

const toogleSortByAction = sortBy => ({
  type: TOOGLE_SORT_BY,
  sortBy,
});

export default toogleSortByAction;
