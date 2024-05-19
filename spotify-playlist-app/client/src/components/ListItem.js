import React, { useState, useEffect } from 'react'
import { useSearch } from '../context/SearchContext'
import { usePlaylist } from '../context/PlaylistContext'
import styled from 'styled-components'
import AddIcon from './icons/Add'

export default function Listitem({ item }) {

  const { searchById } = useSearch()
  const { addToPlaylist } = usePlaylist()

  const [formattedItem, setFormattedItem] = useState({})
  const [isArtist, setIsArtist] = useState(false)

  useEffect(() => {
    const formatListitem = (item) => {
      const itemData = item.data
      switch (itemData.type) {
        case 'artist': {
          const img = itemData.images[0]?.url
          const artistName = itemData.name
          const type = itemData.type
          const itemId = itemData.id
          return { img: img, name: artistName, type: type, itemId: itemId}
        }
        case 'album': {
          const img = itemData.images[0]?.url
          const albumName = itemData.name
          const artistName = itemData.artists[0]?.name
          const type = itemData.type
          const itemId = itemData.id
          const artistId = itemData.artists[0]?.id
          return { img: img, name: albumName, artistName: artistName, type: type, itemId: itemId, artistId: artistId}
        }
        case 'track': {
          const img = itemData.album.images[0]?.url
          const trackName = itemData.name
          const artistName = itemData.artists[0]?.name
          const type = itemData.type
          const itemId = itemData.id
          const artistId = itemData.artists[0]?.id
          return { img: img, name: trackName, artistName: artistName, type: type, itemId: itemId, artistId: artistId}
        }
        default:
          return {}
      }
    }

    const formatted = formatListitem(item)
    setFormattedItem(formatted)
    setIsArtist(formatted.type === 'artist')
  }, [item])

  const handleSearchById = (id, type) => {
    searchById(id, type)
  }

  const handleAddToPlaylist = () => {
    addToPlaylist(formattedItem)
  }

  return (
    <Container id={formattedItem.type}>
      <ImgAndInfo>
        <Image src={formattedItem.img} alt={formattedItem.name} $isArtist={isArtist}/>
        <Info>
          <Title onClick={() => handleSearchById(formattedItem.itemId, formattedItem.type)}>{formattedItem.name}</Title>
          <Subtitle>
            {formattedItem.type}
            {formattedItem.type === 'track' || formattedItem.type === 'album' ? (
              <> •{' '} 
                <Button onClick={() => handleSearchById(formattedItem.artistId, formattedItem.type)}>
                  <span>{formattedItem.artistName}</span>
                </Button>
              </>
            ) : null}
          </Subtitle>
        </Info>
      </ImgAndInfo>
      {(formattedItem.type === 'track' || formattedItem.type === 'album') && (<AddIcon onClick={handleAddToPlaylist} />)}
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
