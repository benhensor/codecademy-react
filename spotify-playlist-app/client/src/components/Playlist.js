import React from 'react'
import styled from 'styled-components'

export default function Playlist({playlist, createPlaylist}) {
  return (
    <Container>
        <Title>Playlist</Title>
        <List>
          {playlist.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </List>
        <button onClick={createPlaylist}>Export Playlist to Spotify</button>
      </Container>
  )
}

const Container = styled.div`
  background-color: var(--color-dark);
  border-radius: 0.5rem;
  padding: 1rem;
  width: 100%;
`

const Title = styled.h2`
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  color: var(--color-light);
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--color-light);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    button {
      background-color: var(--color-primary);
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      cursor: pointer;
    }
  }
`
