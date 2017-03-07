import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import List from 'components/List';
import { select } from './reducer';

const App = ({ mode, results }) => (
  <div>
    <SearchBox mode={mode} />
    <List items={results} onItemClick={(e, index) => alert(results[index].name)} />
  </div>
);

const mapStateToProps = state => select(state);

function mapDispatchToProps(dispatch) {
  return {
    // TODO:
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
