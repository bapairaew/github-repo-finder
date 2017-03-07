import React from 'react';
import styled from 'styled-components';
import { MobileThreshold } from 'theme';
import { ThemeColor } from 'theme';

const ItemContainer = styled.a`
  display: block;
  padding: 20px;
  margin: 20px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: ${ThemeColor};

  &:hover {
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
  }

  @media (max-width: ${MobileThreshold}px) {
    margin: 10px 5px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 100;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${MobileThreshold}px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-weight: 300;

  @media (max-width: ${MobileThreshold}px) {
    font-size: 1rem;
  }
`;

const ListItem = ({ item, onClick = () => {} }) => (
  <ItemContainer href="#" onClick={onClick}>
    <Title>{item.name}</Title>
    <SubTitle>By: {item.owner.login}</SubTitle>
  </ItemContainer>
);

export default ListItem;
