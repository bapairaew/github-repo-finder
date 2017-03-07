import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.5rem;
  color: rgba(255,255,255,0.75);
  background: rgba(255,255,255,0.125);
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.3);
  }
`;

export default Input;
