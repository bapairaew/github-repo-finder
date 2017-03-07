import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';

const initialState = {
  mode: 'minimized',
  query: {},
  results: [],
  dialogOpened: false,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return Object.assign({}, state, { dialogOpened: true });
    case CLOSE_DIALOG:
      return Object.assign({}, state, { dialogOpened: false });
    default:
      return state;
  }
}

export const select = state => state;
