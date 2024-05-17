import React from 'react'
import styled from 'styled-components'
import { useSearch } from '../context/SearchContext'

export default function Search() {

  const { searchSpotify, loading, error } = useSearch()

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      searchSpotify(e.target.value)
    }
  }

	return (
		<StyledSearch>
			<input
				type="text"
				placeholder="What do you want to listen to?"
				onKeyDown={handleSearch}
			/>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
		</StyledSearch>
	)
}

const StyledSearch = styled.div`
	max-width: 120rem;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem auto;
	input {
		width: 100%;
		max-width: 60rem;
		padding: 1rem;
		border: 1px solid #111;
		border-radius: 5px;
		color: var(--color-dark);
    background-color: #ffffff;
		&::placeholder {
			font-weight: normal;
			color: var(--color-gray);
		}
		&:focus {
			outline: none;
		}
	}
	@media screen and (max-width: 768px) {
		margin: 2rem 5rem;
	}
	@media screen and (max-width: 450px) {
		margin: 2rem 3rem;
	}
`
