import React from 'react';
import styled, { keyframes } from 'styled-components';
import * as array from 'utils/array';

const numberOfBars = 10;
const looper = array.create(numberOfBars);

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px;
`;

const wave = keyframes`
  0% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(0.7);
  }

  100% {
    transform: scaleY(1);
  }
`;

const Bar = styled.div`
  width: 5px;
  height: 100px;
  background: #555;
  margin: 2px;
  animation: ${wave} 1000ms linear infinite;

  ${looper.map(n => `&:nth-child(${n + 1}) {
    animation-delay: ${(n - (numberOfBars / 2)) * 100}ms;
  }`)}
`;

const Loading = () => (
  <LoadingContainer>
    {looper.map(n => <Bar key={n} />)}
  </LoadingContainer>
);

export default Loading;
