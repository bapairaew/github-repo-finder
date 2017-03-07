import React from 'react';
import styled from 'styled-components';

const RepoDetailsContainer = styled.div`
  margin: 0 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 100;
  margin: 10px 0;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
  font-style: italic;
`;

const Separator = styled.div`
  width: 50%;
  border: 1px solid rgba(0,0,0,0.8);
  margin: 30px auto;
`;

const Text = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
`;

const RepoDetails = ({ repo }) => (
  <RepoDetailsContainer>
    <Title>{repo.name}</Title>
    <SubTitle>{repo.description}</SubTitle>
    <Separator />
    <Text>Language: {repo.language || 'Unknown'}</Text>
    <Text>URL: <a href={repo.url}>{repo.url}</a></Text>
  </RepoDetailsContainer>
);

export default RepoDetails;
