import React from 'react';
import styled from 'styled-components';
import SearchInputContainer from 'components/SearchInputContainer';
import Logo from 'components/Logo';
import Input from 'components/Input';
import { ThemeColor } from 'theme';

const SearchBoxContainer = styled.div`
  background: ${ThemeColor};
  height: ${props => props.mode === 'minimized' ? '65px' : '100%'};
`;

const SearchBox = ({ mode }) => (
  <SearchBoxContainer mode={mode}>
    <SearchInputContainer mode={mode}>
      <Logo mode={mode}>Github</Logo>
      <Input mode={mode} type="text" placeholder="Search"></Input>
    </SearchInputContainer>
  </SearchBoxContainer>
)

export default SearchBox;
