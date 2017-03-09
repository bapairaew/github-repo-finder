import {
  SEARCH_REPO_REQUEST,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';
import listReducer, { initialState as listInitialState, select as listSelect } from 'components/List/reducer';
import { buildReducer, buildUnwrapper } from 'prism';

const initialState = {
  mode: '',
  query: null,
  currentRepo: {},
  repos: Object.assign({}, listInitialState),
  followers: Object.assign({}, listInitialState),
  dialogOpened: false
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPO_REQUEST:
      return Object.assign({}, state, { mode: 'minimized', query: action.query });
    case OPEN_DIALOG:
      return Object.assign({}, state, { dialogOpened: true, currentRepo: action.repo });
    case CLOSE_DIALOG:
      return Object.assign({}, state, { dialogOpened: false });
    default:
      return state;
  }
}

const createSubReducer = (wrapperKey, subStoreKey) => {
  return {
    unwrapper: buildUnwrapper(wrapperKey),
    handler: (state, action) => {
      return Object.assign({}, state, { [subStoreKey]: listReducer(listSelect(state, subStoreKey), action) });
    }
  };
};

export default buildReducer([
  createSubReducer('Repos', 'repos'),
  createSubReducer('Followers', 'followers'),
  {
    unwrapper: action => action,
    handler: appReducer
  }], initialState);

export const select = state => state;
