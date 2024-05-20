import React, { useEffect, useRef } from 'react'
import { useAuth } from './context/AuthContext'
import { useSearch } from './context/SearchContext'
import Header from './components/Header'
import UserControls from './components/UserControls'
import Search from './components/Search'
import Display from './components/Display'
import Footer from './components/Footer'

const App = () => {
	const { userData, setAccessToken, setRefreshToken } = useAuth()
	const { resetSearch } = useSearch()
	const displayRef = useRef(null)

	useEffect(() => {
		const query = new URLSearchParams(window.location.search)
		const accessToken = query.get('access_token')
		const refreshToken = query.get('refresh_token')

		if (accessToken && refreshToken) {
			localStorage.setItem('access_token', accessToken)
			localStorage.setItem('refresh_token', refreshToken)
			setAccessToken(accessToken)
			setRefreshToken(refreshToken)
			window.history.replaceState({}, document.title, '/') // Clean the URL
			window.location.reload() // Reload to clear the URL parameters and update state
		}
	}, [setAccessToken, setRefreshToken])

	useEffect(() => {}, [userData])

	

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (displayRef.current && !displayRef.current.contains(event.target)) {
				resetSearch();
			}
		};
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [resetSearch]);

	return (
		<>
			<Header />
			<main>
				<div className='content'>
					<UserControls />
					<Search />
					<Display ref={displayRef}/>
				</div>
			</main>
			<Footer />
		</>
	)
}

export default App
