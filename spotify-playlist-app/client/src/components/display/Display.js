import React, { forwardRef, useState, useEffect } from 'react'
import { useAuth } from '../../context/AuthContext'
import { useSearch } from '../../context/SearchContext'
import Search from './Search'
import SearchResults from '../searchresults/SearchResults'
import Playlist from '../playlist/Playlist'
import { Container, Content, StyledDisplay } from './Styles'

const Display = forwardRef((props, ref) => {
	const { userData } = useAuth()
	const { searchResults, loading, error } = useSearch()
	const [activeFilter, setActiveFilter] = useState('')
	const [activeSearch, setActiveSearch] = useState(false)
	const [filteredResults, setFilteredResults] = useState([])
	const [showPlaylist, setShowPlaylist] = useState(false)

	useEffect(() => {
		if (searchResults && searchResults.length > 0) {
			setActiveSearch(true)
		} else {
			setActiveSearch(false)
		}
	}, [searchResults])

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

	if (!userData) {
		return
	}

	return (
		<Container>
			<StyledDisplay ref={ref} $activeSearch={activeSearch}>
				<Search setShowPlaylist={setShowPlaylist} activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
				{searchResults &&
					searchResults.length > 0 &&
					!loading &&
					!error && (
					<Content $showPlaylist={showPlaylist}>
						<SearchResults results={filteredResults} />
						{showPlaylist && (
							<Playlist
								setShowPlaylist={setShowPlaylist}
							/>
						)}
					</Content>
				)}
			</StyledDisplay>
		</Container>
	)
})

export default Display