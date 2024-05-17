import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <StyledFooter>
      <Container>
        <Text>&copy; {year} <Link href="https://benhensordev.netlify.app/" rel="noreferrer" target="_blank">Ben Hensor</Link></Text>
      </Container>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  background-color: var(--color-dark);
  color: var(--color-dark-gray);
  text-align: center;
  padding: 2rem 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: clamp(var(--font-size-xxs), 1.5vw, var(--font-size-md));
  z-index: 100;
  @media screen and (max-width: 768px) {
    padding: 1rem 0;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

const Text = styled.p`
  color: var(--color-dark-gray);
`

const Link = styled.a`
  color: var(--color-dark-gray);
  text-decoration: none;
  transition: .12s ease-in-out;
  &:hover {
    color: var(--color-primary);
  }
`