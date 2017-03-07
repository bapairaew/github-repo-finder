import {
  SEARCH_REPO,
  SEARCH_REPO_REQUEST,
  SEARCH_REPO_SUCCESS,
  SEARCH_REPO_FAILURE,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';
import fetch from 'utils/fetch';
import debounce, { cancel } from 'utils/debounce';

export function searchRepoRequest() {
  return {
    type: SEARCH_REPO_REQUEST
  };
}

export function searchRepoSuccess(items) {
  return {
    type: SEARCH_REPO_SUCCESS,
    items
  };
}

export function searchRepoFailure(error) {
  return {
    type: SEARCH_REPO_FAILURE,
    error
  };
}

export function openDialog(repo) {
  return {
    type: OPEN_DIALOG,
    repo
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG
  };
}

export function searchRepo(query) {
  return dispatch => {
    if (query) {
      debounce(SEARCH_REPO, () => {
        dispatch(searchRepoRequest(query));
        fetch(`https://api.github.com/search/repositories?q=${query}`)
          .then(json => dispatch(searchRepoSuccess(json.items)))
          .catch(error => dispatch(searchRepoFailure(error)))
      });
    } else {
      cancel(SEARCH_REPO);
      dispatch(searchRepoSuccess([]));
    }
  };
}
