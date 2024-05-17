import React from 'react'
import styled from 'styled-components'
import UseMediaQuery from '../hooks/UseMediaQuery'
import { useSearch } from '../context/SearchContext';

export default function Album({ album }) {
  const { searchSpotify } = useSearch();

  const isDesktop = UseMediaQuery('(min-width: 1200px)').matches;
  const isTablet = UseMediaQuery('(min-width: 451px) and (max-width: 1199px)').matches;
  const isMobile = UseMediaQuery('(max-width: 450px)').matches;

  const getImage = () => {
      if (isDesktop) {
        return album.images[0].url
      } else if (isTablet) {
        return album.images[1].url
      } else if (isMobile) {
        return album.images[2].url
      }
  }

  return (
    <Container onClick={() => searchSpotify(album.name)}>
      <Image src={getImage()} alt={album.name} />
      <div>
        <h3>{album.name}</h3>
        <h4>{album.artists[0].name}</h4>
      </div>
    </Container>
  )
}

const Container = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div {
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      font-size: var(--font-size-md);
      color: var(--color-light);
    }
  }
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 0.5rem;
`