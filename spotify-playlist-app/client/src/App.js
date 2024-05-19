import React, { useEffect } from 'react'
import { AuthProvider, useAuth } from './context/AuthContext'
import { SearchProvider } from './context/SearchContext'
import Header from './components/Header'
import UserControls from './components/UserControls'
import Search from './components/Search'
import Dashboard from './components/Display'
import Footer from './components/Footer'

const AppContent = () => {
	const { userData, setAccessToken, setRefreshToken } = useAuth()

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

	return (
		<>
			<Header />
			<main>
				<div className="content">
					<UserControls />
					<Search />
					<Dashboard />
				</div>
			</main>
			<Footer />
		</>
	)
}

const App = () => {
	return (
		<AuthProvider>
			<SearchProvider>
				<AppContent />
			</SearchProvider>
		</AuthProvider>
	)
}

export default App
