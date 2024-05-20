import React from 'react';
import styled from 'styled-components';
import { useAuth } from '../context/AuthContext';
import Opening from './icons/Opening';
import Closing from './icons/Closing';

export default function UserControls() {
  const { accessToken, userData } = useAuth();
  const loginUrl = `${process.env.REACT_APP_BACKEND_URL}/login`;

  return (
    <StyledUserControls>
      {!accessToken && (
        <LoginButton href={loginUrl}>Log in with Spotify</LoginButton>
      )}
      {accessToken && userData && (
        <WelcomeText>Welcome <Opening /> {userData.display_name} <Closing /></WelcomeText>
      )}
    </StyledUserControls>
  );
}

const StyledUserControls = styled.div`
  max-width: 120rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1199px) {
    margin: 2rem 2rem;
  }
  @media screen and (max-width: 450px) {
    margin: 2rem 1rem;
  }
`

const LoginButton = styled.a`
	background-color: var(--color-primary);
	color: white;
	padding: 1rem 2rem;
	border-radius: 1rem;
	text-decoration: none;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
	transition: 0.12s;
	&:hover {
		background-color: var(--color-tertiary);
	}
`

const WelcomeText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  background-color: #00000050;
  border-radius: 1rem;
  width: 100%;
  max-width: 50rem;
  text-align: center;
	font-size: clamp(var(--font-size-xs), 3vw, var(--font-size-lg));
	margin-top: 1rem;
	font-size: var(--font-size-lg);
	color: var(--color-light);
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-md);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xs);
  }
`
