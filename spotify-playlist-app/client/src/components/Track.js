import React from 'react'
import styled from 'styled-components'
import Add from '../assets/icons/add.svg'

export default function Track({ img, trackName, artistName, type }) {

  return (
    <Container>
      <ImgAndInfo>
        <Image src={img} alt={trackName} />
        <Info>
          <Title>{trackName}</Title>
          <Subtitle>{type} • <span>{artistName}</span></Subtitle>
        </Info>
      </ImgAndInfo>
      <img src={Add} alt="Add to Playlist" />
    </Container>
  )
}

const Container = styled.div`
  backdrop-filter: blur(5px);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

const ImgAndInfo = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`

const Image = styled.img`
  width: 6.4rem;
  height: 6.4rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    width: 4rem;
    height: 4rem;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 0.5rem;
  overflow: hidden;
`

const Title = styled.h3`
  font-size: var(--font-size-md);
  color: var(--color-light);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-xs);
  }
`

const Subtitle = styled.h4`
  font-size: var(--font-size-xs);
  color: var(--color-light-gray);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    color: var(--color-primary);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-xxs);
    color: var(--color-dark-gray);
  }
`