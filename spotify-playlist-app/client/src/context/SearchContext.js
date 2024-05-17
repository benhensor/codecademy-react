import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { accessToken } = useAuth();
  const [searchResults, setSearchResults] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchSpotify = async (query) => {
    if (!accessToken) {
      setError('Invalid or missing access token');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: query,
          type: 'track,artist,album',
        },
      });
      setSearchResults(response.data);
      setSearchTerm(query);
    } catch (error) {
      console.error('Error searching Spotify:', error);
      setError('Error searching Spotify');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider value={{ searchResults, searchTerm, searchSpotify, loading, error }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
