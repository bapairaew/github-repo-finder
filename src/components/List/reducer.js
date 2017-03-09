import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from './constants';

export const initialState = {
  results: null,
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return Object.assign({}, state, { results: null, loading: true, error: null });
    case FETCH_ITEMS_SUCCESS:
      return Object.assign({}, state, { results: action.results, loading: false });
    case FETCH_ITEMS_FAILURE:
      return Object.assign({}, state, { error: action.error, loading: false });
    default:
      return state;
  }
}

export const select = (state, key) => state[key];
