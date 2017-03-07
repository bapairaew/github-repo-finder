import React from 'react';
import styled from 'styled-components';

const ErrorBoxContainer = styled.div`
  background: #f44336;
  color: rgba(255,255,255,0.7);
  padding: 10px;
`;

const ErrorBox = ({ children }) => (
  <ErrorBoxContainer>
    {children}
  </ErrorBoxContainer>
)

export default ErrorBox;
