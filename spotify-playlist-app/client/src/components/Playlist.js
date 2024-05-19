import React, { useEffect } from 'react'
import { usePlaylist } from '../context/PlaylistContext'
import styled from 'styled-components'
import PlaylistItem from './PlaylistItem'

export default function Playlist() {

  const { playlist, createPlaylist, loading, error } = usePlaylist()

  const handleCreatePlaylist = () => {
    const name = prompt('Enter playlist name:');
    if (name) {
      createPlaylist(name);
    }
  };

  if (error) { return <div>{error}</div> }

  return (
    <StyledPlaylist>
      <Header>
        <Title>Playlist</Title>
        <Button onClick={handleCreatePlaylist} disabled={loading}>
          {loading ? 'Creating...' : 'Create Playlist'}
        </Button>
      </Header>
      <List>
        {playlist.map((item) => (
          <PlaylistItem key={item.itemId} item={item}/>
        ))}
      </List>
    </StyledPlaylist>
  )
}

const StyledPlaylist = styled.div`
  backdrop-filter: blur(5px);
  padding: 1rem;
  overflow: hidden;
  overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  color: var(--color-light);
`

const Button = styled.button`
  background-color: #00aa9025;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: .12s;
	text-shadow: 0 0 0.2rem #000000;
  &:hover {
    background-color: var(--color-primary);
  }
`

const List = styled.ul`
  list-style: none;
`
