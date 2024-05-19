import React, { useState } from 'react'
import styled from 'styled-components'
import { useSearch } from '../context/SearchContext'

export default function Search() {

  const { searchSpotify } = useSearch()

	const [value, setValue] = useState('')

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      searchSpotify(e.target.value)
			setValue('')
    }
  }

	return (
		<StyledSearch>
			<input
				type="text"
				placeholder="What do you want to listen to?"
				value={value}
        onChange={(e) => setValue(e.target.value)}
				onKeyDown={handleSearch}
			/>
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
		max-width: 50rem;
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
		margin: 2rem 2rem;
	}
	@media screen and (max-width: 450px) {
		margin: 2rem 1rem;
	}
`
