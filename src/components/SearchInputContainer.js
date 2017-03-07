import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { MobileThreshold } from 'theme';

const SearchInputContainer = styled(Container)`
  display: flex;
  align-items: center;
  flex-direction: ${props => props.mode === 'minimized' ? 'row' : 'column'};
  height: 100%;

  @media (max-width: ${MobileThreshold}px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default SearchInputContainer;
