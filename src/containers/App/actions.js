import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
} from './constants';

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
