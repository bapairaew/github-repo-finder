import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import ListItem from './ListItem';

const List = ({ items, onItemClick = () => {} }) => (
  <Container>
    {items.map((item, index) => <ListItem key={index} item={item} onClick={e => onItemClick(e, index)} />)}
  </Container>
);

export default List;
