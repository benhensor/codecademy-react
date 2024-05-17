import React from 'react';
import styled from 'styled-components';

const Header = () => {

  return (
    <StyledHeader>
      <Container>
        <Title>Ja<Highlight>m</Highlight></Title>
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-dark);
  height: 15rem;
  z-index: 100;
  @media screen and (max-width: 1199px) {
    height: 10rem;
  }
  @media screen and (max-width: 768px) {
    height: 7rem;
  }
  @media screen and (max-width: 450px) {
    height: 5rem;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1199px) {
    margin: var(--tablet)
  }
  @media screen and (max-width: 450px) {
    margin: var(--mobile)
  }
`

const Title = styled.h1`
  font-size: clamp(var(--font-size-xl), 5vw, var(--font-size-xxxl));
  color: var(--color-light);
`

const Highlight = styled.span`
  color: var(--color-primary);
`