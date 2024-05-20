import React, { useState } from 'react'
import { usePlaylist } from '../context/PlaylistContext'
import styled from 'styled-components'
import PlaylistItem from './PlaylistItem'

export default function Playlist({ setShowPlaylist }) {

  const { playlist, createPlaylist, loading, error } = usePlaylist()

  const [playlistName, setPlaylistName] = useState('New Playlist...')
  const [isEditing, setIsEditing] = useState(false)
  const [tempName, setTempName] = useState('')

  const handleCreatePlaylist = () => {
    if (playlistName) {
      createPlaylist(playlistName)
    }
    setPlaylistName('New Playlist...')
    setShowPlaylist(false)
  }

  const startEditing = () => {
    setTempName('')
    setIsEditing(true)
  }

  const stopEditing = () => {
    if (tempName.trim()) {
      setPlaylistName(tempName)
    }
    setIsEditing(false)
  }

  if (error) { return <div>{error}</div> }

  return (
    <StyledPlaylist>
      <Header>
        {isEditing ? (
          <NameInput
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onBlur={stopEditing}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                stopEditing()
              }
            }}
            autoFocus
          />
        ) : (
          <PlaylistName onClick={startEditing}>
            {playlistName}
          </PlaylistName>
        )}
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
  height: 100%;
  backdrop-filter: blur(5px);
  padding: 1rem 0;
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
  padding: 0 1rem 1rem 1rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const PlaylistName = styled.h2`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: clamp(var(--font-size-md), 3vw, var(--font-size-xl));
  color: var(--color-light);
  height: 4rem;
  cursor: pointer;
  &:hover {
    color: var(--color-primary);
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const NameInput = styled.input`
  font-size: clamp(var(--font-size-md), 3vw, var(--font-size-xl));
  padding: 0.6rem 0;
  border: none;
  border-radius: 0.2rem;
  background-color: transparent;
  color: var(--color-light);
  height: 4rem;
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
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
