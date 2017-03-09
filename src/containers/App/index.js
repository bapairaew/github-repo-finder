import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import List from 'components/List';
import Container from 'components/Container';
import RepoListItem from 'components/RepoListItem';
import UserListItem from 'components/UserListItem';
import Dialog from 'components/Dialog';
import Loading from 'components/Loading';
import ErrorBox from 'components/ErrorBox';
import RepoDetails from 'components/RepoDetails';
import { select as listSelect } from 'components/List/reducer';
import { select } from './reducer';
import { searchRepo, openDialog, closeDialog } from './actions';

const AppContainer = styled.div`
  height: 100%;
`;

const DialogHeader = styled.h1`
  text-align: center;
`;

const App = (props) => (
  <AppContainer>
    <SearchBox mode={props.mode} onChange={text => props.searchRepo(text)} />
    { props.query &&
        <Container>
          <List
            selector={state => listSelect(select(state), 'repos')}
            wrapper={type => `Repos.${type}`}
            endpoint={`https://api.github.com/search/repositories?q=${props.query}`}
            renderer={results => results.items.map((item, index) => (
              <RepoListItem key={index} repo={item} onClick={() => props.openDialog(results.items[index])} />
            ))} />
        </Container>
    }
    <Dialog isOpened={props.dialogOpened} onCloseClicked={props.closeDialog}>
      <RepoDetails repo={props.currentRepo} />
      <DialogHeader>Followers</DialogHeader>
      { props.currentRepo.subscribers_url &&
          <List
            selector={state => listSelect(select(state), 'followers')}
            wrapper={type => `Followers.${type}`}
            endpoint={props.currentRepo.subscribers_url}
            renderer={results => results.map((item, index) => (
              <UserListItem key={index} user={item} />
            ))} />
      }
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
