import {
  SEARCH_REPO_REQUEST,
  SEARCH_REPO_SUCCESS,
  SEARCH_REPO_FAILURE,
} from './constants';

const initialState = {
  mode: 'minimized',
  query: {},
  results: [],
  loading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    // TODO:
    default:
      return state;
  }
}

export const select = state => state;
