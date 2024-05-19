import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'

export default function SearchResults({ results }) {

  return (
    <StyledSearchResults>

      <ListedResults>
        {results.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </ListedResults>

    </StyledSearchResults>
  )
}

const StyledSearchResults = styled.div`
  border-radius: 0.5rem;
  height: 100%;
  overflow: hidden;
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