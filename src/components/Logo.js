import React from 'react';
import styled from 'styled-components';
import { MobileThreshold } from 'theme';

const Logo = styled.h1`
  text-align: center;
  font-size: ${props => props.mode === 'minimized' ? '1.5rem' : '5rem'};
  font-weight: 100;
  color: rgba(255,255,255,0.75);
  margin: 0;
  padding: ${props => props.mode === 'minimized' ? '0 10px' : '1em'};

  @media (max-width: ${MobileThreshold}px) {
    display: ${props => props.mode === 'minimized' ? 'none' : 'block'};
    padding: 10px 0;
    font-size: 4rem;
  }
`;

export default Logo;
