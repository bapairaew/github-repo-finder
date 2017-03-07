import React from 'react';
import styled from 'styled-components';
import { MobileThreshold } from 'theme';

const SearchInput = styled.input`
  font-size: ${props => props.mode === 'minimized' ? '1rem' : '1.5rem'};
  color: rgba(255,255,255,0.75);
  background: rgba(255,255,255,0.125);
  width: 90%;
  margin: 0 10px;
  padding: ${props => props.mode === 'minimized' ? '10px' : '20px'};
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.3);
  }

  @media (max-width: ${MobileThreshold}px) {
    font-size: 1rem;
    padding: 10px;
  }
`;

export default SearchInput;
