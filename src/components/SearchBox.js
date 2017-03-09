import React from 'react';
import styled from 'styled-components';
import SearchInputContainer from 'components/SearchInputContainer';
import Logo from 'components/Logo';
import SearchInput from 'components/SearchInput';
import { ThemeColor } from 'theme';

const SearchBoxContainer = styled.div`
  background: ${ThemeColor};
  transition: all 500ms;
  transition-delay: 200ms;
  height: ${props => props.mode === 'minimized' ? '65px' : '100%'};
`;

const SearchBox = ({ mode, onChange }) => (
  <SearchBoxContainer mode={mode}>
    <SearchInputContainer mode={mode}>
      <Logo mode={mode}>Github</Logo>
      <SearchInput mode={mode} type="text" placeholder="Search" onChange={e => onChange(e.target.value)} />
    </SearchInputContainer>
  </SearchBoxContainer>
)

export default SearchBox;
