import React from 'react';
import styled from 'styled-components';
import { MobileThreshold } from 'theme';

const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0,0,0,.5);
  display: flex;
  alignItems: center;
  justifyContent: center;
  visibility: ${props => props.isOpened ? 'visible' : 'collapse' };
`;

const Box = styled.div`
  height: 600px;
  width: 600px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  @media (max-width: ${MobileThreshold}px) {
    height: 100%;
    width: 100%;
    border-radius: 0;
  }
`;

const TopBar = styled.div`
  padding: 0 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  font-size: 1rem;
  font-weight: 100;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &:focus {
    outline: 0;
  }
`;

const Content = styled.div`
  padding: 10px;
  overflow: auto;
`;

const Dialog = ({ isOpened = false, onCloseClicked = () => {}, children }) => (
  <Shadow isOpened={isOpened}>
    <Box>
      <TopBar>
        <CloseButton onClick={onCloseClicked}>Close</CloseButton>
      </TopBar>
      <Content>
        {children}
      </Content>
    </Box>
  </Shadow>
)

export default Dialog;
