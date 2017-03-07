import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import List from 'components/List';
import Dialog from 'components/Dialog';
import Loading from 'components/Loading';
import ErrorBox from 'components/ErrorBox';
import { select } from './reducer';
import { searchRepo, openDialog, closeDialog } from './actions';

const AppContainer = styled.div`
  height: 100%;
`;

const App = (props) => (
  <AppContainer>
    <SearchBox mode={props.mode} onChange={text => props.searchRepo(text)} />
    { props.error && <ErrorBox>{error}</ErrorBox>}
    { props.loading && <Loading />}
    <List items={props.results} onItemClick={(e, index) => props.openDialog(props.results[index])} />
    <Dialog isOpened={props.dialogOpened} onCloseClicked={props.closeDialog}>
      {props.currentRepo.name}
    </Dialog>
  </AppContainer>
);

const mapStateToProps = state => select(state);

function mapDispatchToProps(dispatch) {
  return {
    searchRepo: query => dispatch(searchRepo(query)),
    openDialog: repo => dispatch(openDialog(repo)),
    closeDialog: () => dispatch(closeDialog()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
