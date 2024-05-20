import React, { forwardRef, useState, useEffect } from 'react'
// import axios from 'axios';
import styled from 'styled-components'
import { useAuth } from '../context/AuthContext'
import { useSearch } from '../context/SearchContext'
import SearchResults from './SearchResults'
import NewPlaylist from './icons/ShowPlaylist'
import Playlist from '../components/Playlist'

const Display = forwardRef((props, ref) => {
	const { userData } = useAuth()
	const { searchTerm, searchResults, loading, error } = useSearch()
	const [activeFilter, setActiveFilter] = useState('')
	const [filteredResults, setFilteredResults] = useState([])
	const [showPlaylist, setShowPlaylist] = useState(false)

	const formatSearchTerm = (searchTerm) => {
		return searchTerm
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')
	}

	useEffect(() => {
		const filterResults = (filter) => {
			if (!searchResults) return

			switch (filter) {
				case 'artists':
					setFilteredResults(
						searchResults.filter((item) => item.type === 'artist')
					)
					break
				case 'songs':
					setFilteredResults(
						searchResults.filter((item) => item.type === 'track')
					)
					break
				case 'albums':
					setFilteredResults(
						searchResults.filter((item) => item.type === 'album')
					)
					break
				default:
					setFilteredResults(searchResults)
			}
		}

		filterResults(activeFilter)
	}, [activeFilter, searchResults])

	const handleFilterSelect = (filter) => {
		setActiveFilter(filter === activeFilter ? '' : filter)
	}

	const handleShowPlaylist = () => {
		setShowPlaylist((prev) => !prev)
	}

	if (!userData) {
		return
	}

	return (
		<>
			{searchResults &&
				searchResults.length > 0 &&
				!loading &&
				!error && (
					<StyledDisplay ref={ref}>
						<Header>
							<SearchTerm>
								{formatSearchTerm(searchTerm)}
							</SearchTerm>
							<Controls>
								<Filters $activeFilter={activeFilter}>
									<FilterButton
										$isActive={activeFilter === 'artists'}
										onClick={() =>
											handleFilterSelect('artists')
										}
									>
										artists
									</FilterButton>
									<FilterButton
										$isActive={activeFilter === 'songs'}
										onClick={() =>
											handleFilterSelect('songs')
										}
									>
										songs
									</FilterButton>
									<FilterButton
										$isActive={activeFilter === 'albums'}
										onClick={() =>
											handleFilterSelect('albums')
										}
									>
										albums
									</FilterButton>
								</Filters>
								<NewPlaylist
									onClick={() => handleShowPlaylist()}
								/>
							</Controls>
						</Header>
						<ContentContainer $showPlaylist={showPlaylist}>
							<SearchResults results={filteredResults} />
							{showPlaylist && (
								<Playlist
									setShowPlaylist={setShowPlaylist}
								/>
							)}
						</ContentContainer>
					</StyledDisplay>
				)}
		</>
	)
})

export default Display

const StyledDisplay = styled.div`
	max-width: 120rem;
	height: 70%;
	background-color: #00000099;
	backdrop-filter: blur(7px);
	border-radius: 1rem;
	margin: 5rem auto;
	padding: 2rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media screen and (max-width: 1199px) {
		margin: 5rem 2rem;
	}
	@media screen and (max-width: 768px) {
		height: 80vh;
		margin: 5rem 1rem;
		padding: 1rem;
	}
`

const Header = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 1rem 0;
	margin-bottom: 1rem;
	border-bottom: 1px solid #00aa9050;
	@media screen and (max-width: 799px) {
		flex-direction: column;
		align-items: flex-start;
	}
`

const Controls = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media screen and (max-width: 768px) {
		align-items: center;
	}
	@media screen and (max-width: 768px) {
		align-items: center;
	}
`

const SearchTerm = styled.h2`
	font-size: clamp(var(--font-size-md), 3vw, var(--font-size-xl));
	color: var(--color-light);
	@media screen and (max-width: 799px) {
		margin-bottom: 1rem;
	}
`

const Filters = styled.nav`
	display: flex;
	align-items: center;
	gap: 1rem;
`

const FilterButton = styled.button`
	background-color: ${(props) =>
		props.$isActive ? 'var(--color-primary)' : '#00aa9025'};
	color: white;
	padding: 0.5rem 2rem;
	border: none;
	border-radius: 0.2rem;
	cursor: pointer;
	transition: 0.12s;
	text-shadow: 0 0 0.2rem #000000;
	&:hover {
		background-color: #00aa90;
	}
`

const ContentContainer = styled.div`
	display: grid;
	grid-template-columns: ${(props) =>
		props.$showPlaylist ? '1fr 1fr' : '1fr'};
	gap: 2rem;
	overflow: hidden;
	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-auto-flow: dense;

		/* Reverse the order of children */
		& > *:nth-child(2) {
			order: -1;
		}
	}
`

