import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from './constants';
import fetch from 'utils/fetch';

export function fetchItemsRequest() {
  return {
    type: FETCH_ITEMS_REQUEST
  };
}

export function fetchItemsSuccess(results) {
  return {
    type: FETCH_ITEMS_SUCCESS,
    results
  };
}

export function fetchItemsFailure(error) {
  return {
    type: FETCH_ITEMS_FAILURE,
    error
  };
}

export function fetchItems(endpoint) {
  return dispatch => {
    dispatch(fetchItemsRequest());
    fetch(endpoint)
      .then(results => dispatch(fetchItemsSuccess(results)))
      .catch(error => dispatch(fetchItemsFailure(error)));
  };
}
