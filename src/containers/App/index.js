import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import { select } from './reducer';

const App = ({ mode }) => (
  <SearchBox mode={mode} />
);

const mapStateToProps = state => select(state);

function mapDispatchToProps(dispatch) {
  return {
    // TODO:
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
