import {
  SEARCH_REPO_REQUEST,
  SEARCH_REPO,
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';
import fetch from 'utils/fetch';
import debounce, { cancel } from 'utils/debounce';

export function searchRepoRequest(query) {
  return {
    type: SEARCH_REPO_REQUEST,
    query
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
      });
    } else {
      cancel(SEARCH_REPO);
    }
  };
}
