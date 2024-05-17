import React from 'react'
import styled from 'styled-components'
import Plus from '../assets/icons/icon-plus.svg'

export default function Track({ track }) {

  console.log(track)

  return (
    <Container>
      <div>
        <Image src={track.album.images[2].url} alt={track.name} />
        <Info>
          <h3>{track.name}</h3>
          <h4>{track.artists[0].name}</h4>
        </Info>
      </div>
      <img src={Plus} alt="Add to Playlist" />
    </Container>
  )
}

const Container = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: flex-start;    
  }
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-right: 1rem;
  border-radius: 0.5rem;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  h3 {
    font-size: var(--font-size-md);
    color: var(--color-light);
  }
  h4 {
    font-size: var(--font-size-xs);
    color: var(--color-light);
  }
`