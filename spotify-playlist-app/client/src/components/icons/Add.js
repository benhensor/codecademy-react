import React from 'react'
import styled from 'styled-components'

export default function Add({ onClick }) {
  return (
    <AddButton onClick={onClick}>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 500 450"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="256"
          y1="112"
          x2="256"
          y2="400"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
        <line
          x1="400"
          y1="256"
          x2="112"
          y2="256"
          style={{ fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }}
        />
      </svg>
    </AddButton>
  );
}

const AddButton = styled.button`
  background: none;
  background-color: none;
  color: var(--color-white);
  width: 4rem;
  height: 4rem;
  border: 1px solid var(--color-white);
  border-radius: 50%;
  cursor: pointer;
  transition: 0.12s;
  text-shadow: 0 0 0.2rem #000000;
  &:hover {
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
`