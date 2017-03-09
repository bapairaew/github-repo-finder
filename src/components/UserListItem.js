import React from 'react';
import styled from 'styled-components';
import { MobileThreshold } from 'theme';

const ItemContainer = styled.div`
  padding: 20px;
  margin: 20px;
  border: 1px solid rgba(255,255,255,255.2);
  border-radius: 5px;
  display: flex;
  align-items: center;

  @media (max-width: ${MobileThreshold}px) {
    margin: 10px 5px;
  }
`;

const Avatar = styled.img`
  flex: 0 0 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 300;
  margin: 0;

  @media (max-width: ${MobileThreshold}px) {
    font-size: 1rem;
  }
`;

const UserListItem = ({ user, onClick = () => {} }) => (
  <ItemContainer href="#" onClick={onClick}>
    <Avatar src={user.avatar_url} />
    <Title>{user.login}</Title>
  </ItemContainer>
);

export default UserListItem;
