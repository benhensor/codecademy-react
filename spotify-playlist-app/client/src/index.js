import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider, useAuth } from './context/AuthContext'
import { SearchProvider } from './context/SearchContext'
import { PlaylistProvider } from './context/PlaylistContext'
import './styles/GlobalStyles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
			<SearchProvider>
				<PlaylistProvider>
					<App />
				</PlaylistProvider>
			</SearchProvider>
		</AuthProvider>
  </React.StrictMode>
);