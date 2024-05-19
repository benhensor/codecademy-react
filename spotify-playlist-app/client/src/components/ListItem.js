import React from 'react'
import styled from 'styled-components'
import Artist from './Artist'
import Album from './Album'
import Track from './Track'

export default function ListItem(item) {

  const formatListItem = (item) => {
    
    switch (item.item.type) {
      case 'artist': {
        const img = item.item.images[0].url
        const artistName = item.item.name
        const type = item.item.type
        const artistId = item.item.id
        return <Artist id='artist' img={img} artistName={artistName} type={type} artistId={artistId}/>
      }
      case 'album': {
        const img = item.item.images[0].url
        const albumName = item.item.name
        const artistName = item.item.artists[0].name
        const type = item.item.type
        const albumId = item.item.id
        return <Album id='album' img={img} albumName={albumName} artistName={artistName} type={type} albumId={albumId}/>
      }
      case 'track': {
        const img = item.item.album.images[0].url
        const trackName = item.item.name
        const artistName = item.item.artists[0].name
        const type = item.item.type
        return <Track id='track' img={img} trackName={trackName} artistName={artistName} type={type} />
      }
      default:
        return 
    }
  }

  return (
    <Container>
      {formatListItem(item)}
    </Container>
  )
}

const Container = styled.li`
  display: flex;
  align-items: center;
`