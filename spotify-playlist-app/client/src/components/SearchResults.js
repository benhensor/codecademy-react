import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

export default function SearchResults({ results }) {

  return (
    <StyledSearchResults>
      <ListedResults>
        {results.map((item) => (
          <ListItem key={item.data.id} item={item} />
        ))}
      </ListedResults>

    </StyledSearchResults>
  )
}

const StyledSearchResults = styled.div`
  height: 100%;
  overflow-y: auto;
	&::-webkit-scrollbar {
		display: none;
	}
	-ms-overflow-style: none;
	scrollbar-width: none;
`

const ListedResults = styled.ul`
  list-style: none;
`