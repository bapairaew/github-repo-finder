import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import SearchBox from 'components/SearchBox';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Input from 'components/Input';
import { select } from './reducer';

const App = () => (
  <SearchBox>
    <Container>
      <Logo>Github</Logo>
      <Input type="text" placeholder="Search"></Input>
    </Container>
  </SearchBox>
);

const mapStateToProps = state => select(state);

function mapDispatchToProps(dispatch) {
  return {
    // TODO:
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
