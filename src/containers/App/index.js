import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import List from 'components/List';
import Dialog from 'components/Dialog';
import { select } from './reducer';
import { openDialog, closeDialog } from './actions';

const App = ({ dialogOpened, mode, results, openDialog, closeDialog }) => (
  <div>
    <SearchBox mode={mode} />
    <List items={results} onItemClick={(e, index) => openDialog(results[index])} />
    <Dialog isOpened={dialogOpened} onCloseClicked={closeDialog}>
      Dialog Content
    </Dialog>
  </div>
);

const mapStateToProps = state => select(state);

function mapDispatchToProps(dispatch) {
  return {
    openDialog: repo => dispatch(openDialog(repo)),
    closeDialog: () => dispatch(closeDialog()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
