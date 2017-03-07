import {
  SEARCH_REPO_REQUEST,
  SEARCH_REPO_SUCCESS,
  SEARCH_REPO_FAILURE,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';

const initialState = {
  mode: '',
  query: {},
  results: [],
  currentRepo: {},
  dialogOpened: false,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPO_REQUEST:
      return Object.assign({}, state, { mode: 'minimized', results: [], loading: true });
    case SEARCH_REPO_SUCCESS:
      return Object.assign({}, state, { loading: false, results: action.items });
    case SEARCH_REPO_FAILURE:
      return Object.assign({}, state, { loading: false, error: action.error });
    case OPEN_DIALOG:
      return Object.assign({}, state, { dialogOpened: true, currentRepo: action.repo });
    case CLOSE_DIALOG:
      return Object.assign({}, state, { dialogOpened: false, currentRepo: {} });
    default:
      return state;
  }
}

export const select = state => state;
