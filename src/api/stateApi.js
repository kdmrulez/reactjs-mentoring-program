// @flow
import { SERVER_URL } from '../constants/index';

const saveState = (state: Object) => fetch(`${SERVER_URL}/saveState`, {
  body: JSON.stringify(state),
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
});

export default saveState;
