import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSearch } from '../context/SearchContext'
import Album from './Album'
import Track from './Track'

export default function SearchResults({ searchResults, addToPlaylist}) {

  const { searchTerm } = useSearch()

  const getSearchType = (searchResults) => {
    switch(searchResults.type) {
      case 'artists':
        return searchResults.artists.items
      case 'albums':
        return searchResults.albums.items
      case 'tracks':
        return searchResults.tracks.items
      default:
        return []
    }
  }

  console.log(searchResults)

  const formatSearchTerm = (searchTerm) => {
    return searchTerm.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  }

  return (
    <>
      {!searchResults ? ( 
        <div>Loading...</div>
      ) : (
      <Container>
        <Title>results for '{formatSearchTerm(searchTerm)}'</Title>
        <Results>
          <h4>Artists...</h4>
          {searchResults.artists?.items.map((artist) => (
            <li key={artist.id}>
              <h3>{artist.name}</h3>
            </li>
          ))}
          <h4>Albums...</h4>
          {searchResults.albums?.items.map((album) => (
            <Album key={album.id} album={album} />
          ))}
          <h4>Tracks...</h4>
          {searchResults.tracks?.items.map((track) => (
            <Track key={track.id} track={track} />
          ))}
        </Results>
      </Container>
      )}
    </>
  )
}

const Container = styled.div`
  background-color: #00000099;
  backdrop-filter: blur(7px);
  border-radius: 0.5rem;
  padding: 1rem;
  height: 100%;
  overflow-y: scroll;
`

const Title = styled.h2`
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  color: var(--color-light);
`

const Results = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  h3 {
    color: var(--color-light);
  }
  h4 {
    margin-left: 1rem;
    color: var(--color-primary);
  }
  li {
    background-color: #00000005;
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;
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