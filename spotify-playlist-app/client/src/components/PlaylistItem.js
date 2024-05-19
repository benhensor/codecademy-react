import React from 'react'
import styled from 'styled-components'
import { useSearch } from '../context/SearchContext'
import { usePlaylist } from '../context/PlaylistContext'
import Remove from './icons/Remove'

export default function PlaylistItem({ item }) {

  const { img, name, artistName, albumName, type, itemId, artistId } = item

  const { searchById } = useSearch()
  const { removeFromPlaylist } = usePlaylist()

  const handleSearchById = (id, type) => {
    searchById(id, type)
  }

  const handleRemove = (index) => {
    removeFromPlaylist(index);
  };
  
  return (
    <Container id={type}>
      <ImgAndInfo>
        <Image src={img} alt={name}/>
        <Info>
          <Title onClick={() => handleSearchById(itemId, type)}>{name}</Title>
          <Subtitle>
            {type}
            {type === 'track' || type === 'album' ? (
              <> {' • '} 
                <Button onClick={() => handleSearchById(artistId, type)}>
                  <span>{artistName}</span>
                </Button>
              </>
            ) : null}
          </Subtitle>
        </Info>
      </ImgAndInfo>
      <Remove />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  user-select: none;
  transition: .12s;
  &:hover {
		background-color: #ffffff15;
	}
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
  border-radius: ${props => props.$isArtist ? '50%' : '0.5rem'};
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
  cursor: pointer;
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
    cursor: pointer;
    color: var(--color-primary);
  }
  @media screen and (max-width: 768px) {
    font-size: var(--font-size-xxs);
    color: var(--color-dark-gray);
  }
`

const Button = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font: inherit;
`