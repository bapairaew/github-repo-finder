import React from 'react';
import styled from 'styled-components';

const Logo = styled.h1`
  text-align: center;
  font-size: ${props => props.mode === 'minimized' ? '1.5rem' : '5rem'};
  font-weight: 100;
  color: rgba(255,255,255,0.75);
  margin: 0;
  padding: ${props => props.mode === 'minimized' ? '0 10px' : '1em'};

  @media (max-width: 500px) {
    display: none;
  }
`;

export default Logo;
