import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const SearchInputContainer = styled(Container)`
  display: flex;
  alignItems: center;
  flexDirection: ${props => props.mode === 'minimized' ? 'row' : 'column'};
  height: 100%;
`;

export default SearchInputContainer;
