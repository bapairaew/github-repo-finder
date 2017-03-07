import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import List from 'components/List';
import Dialog from 'components/Dialog';
import Loading from 'components/Loading';
import ErrorBox from 'components/ErrorBox';
import { select } from './reducer';
import { openDialog, closeDialog } from './actions';

const AppContainer = styled.div`
  height: 100%;
`;

const App = ({ dialogOpened, mode, loading, results, error, openDialog, closeDialog }) => (
  <AppContainer>
    <SearchBox mode={mode} />
    { error && <ErrorBox>{error}</ErrorBox>}
    { loading && <Loading />}
    <List items={results} onItemClick={(e, index) => openDialog(results[index])} />
    <Dialog isOpened={dialogOpened} onCloseClicked={closeDialog}>
      Dialog Content
    </Dialog>
  </AppContainer>
);

const mapStateToProps = state => select(state);

function mapDispatchToProps(dispatch) {
  return {
    openDialog: repo => dispatch(openDialog(repo)),
    closeDialog: () => dispatch(closeDialog()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
