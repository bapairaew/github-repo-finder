import React from 'react';
import styled from 'styled-components';
import { MobileThreshold } from 'theme';


const RepoDetailsContainer = styled.div`
  margin: 40px;
  text-align: center;

  @media (max-width: ${MobileThreshold}px) {
    margin: 20px;
  }
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin: 10px 0;
  word-wrap: break-word;

  @media (max-width: ${MobileThreshold}px) {
    font-size: 2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: 100;
  font-style: italic;

  @media (max-width: ${MobileThreshold}px) {
    font-size: 1rem;
  }
`;

const Separator = styled.div`
  width: 50%;
  border: 1px solid rgba(255,255,255,0.8);
  margin: 30px auto;
`;

const Text = styled.p`
  font-size: 0.8rem;
  font-weight: 100;
`;

const Link = styled.a`
  color: rgba(255,255,255,0.8);
  word-wrap: break-word;
`;

const RepoDetails = ({ repo }) => (
  <RepoDetailsContainer>
    <Title>{repo.name}</Title>
    <SubTitle>{repo.description}</SubTitle>
    <Separator />
    <Text>Language: {repo.language || 'Unknown'}</Text>
    <Text>URL: <Link href={repo.url}>{repo.url}</Link></Text>
  </RepoDetailsContainer>
);

export default RepoDetails;
