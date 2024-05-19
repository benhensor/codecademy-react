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

  useEffect(() => {
    console.log('Playlist:', playlist)
  }, [playlist])

  if (error) { return <div>{error}</div> }

  return (
    <StyledPlaylist>
        <Title>Playlist</Title>
        <List>
          {playlist.map((item) => (
            <PlaylistItem key={item.itemId} item={item}/>
          ))}
        </List>
        <button onClick={handleCreatePlaylist} disabled={loading}>
          {loading ? 'Creating...' : 'Create Playlist'}
        </button>
      </StyledPlaylist>
  )
}

const StyledPlaylist = styled.div`
  backdrop-filter: blur(5px);
  padding: 1rem;
`

const Title = styled.h2`
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  color: var(--color-light);
`

const List = styled.ul`
  list-style: none;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`
