import { RELEASE_DATE } from '../constants';
import { TOOGLE_SORT_BY } from '../actions';

const sortBy = (state = RELEASE_DATE, action) => {
  switch (action.type) {
    case TOOGLE_SORT_BY:
      return action.sortBy;
    default:
      return state;
  }
};

export default sortBy;
