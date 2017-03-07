import {
  SEARCH_REPO_REQUEST,
  SEARCH_REPO_SUCCESS,
  SEARCH_REPO_FAILURE,
} from './constants';

const initialState = {
  mode: 'minimized',
  query: {},
  results: [
    { name: 'testtsatadf', owner: { login: 'johndoe' } },
    { name: 'pytest', owner: { login: 'johndoe' } },
    { name: 'angular', owner: { login: 'johndoe' } }
  ],
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
