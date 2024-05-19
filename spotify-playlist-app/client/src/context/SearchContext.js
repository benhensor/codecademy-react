import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const { accessToken } = useAuth();
  const [searchResults, setSearchResults] = useState(null);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);
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
      setArtists(response.data.artists.items);
      setAlbums(response.data.albums.items);
      setTracks(response.data.tracks.items);
      console.log('Search results:', response.data);
    } catch (error) {
      console.error('Error searching Spotify:', error);
      setError('Error searching Spotify');
    } finally {
      setLoading(false);
    }
  };

  const formatSearchResults = searchResults => {}


  // const getArtistById = async (artistId) => {
  //   if (!accessToken) {
  //     setError('Invalid or missing access token');
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     setArtist(response.data);
  //   } catch (error) {
  //     console.error('Error fetching artist:', error);
  //   }
  // };

  // const getAlbumById = async (albumId) => {
  //   if (!accessToken) {
  //     setError('Invalid or missing access token');
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     setAlbum(response.data);
  //   } catch (error) {
  //     console.error('Error fetching album:', error);
  //   }
  // };

  // const getTrackById = async (trackId) => {
  //   if (!accessToken) {
  //     setError('Invalid or missing access token');
  //     return;
  //   }
  
  //   try {
  //     const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     console.log('Track:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching track:', error);
  //   }
  // };

  return (
    <SearchContext.Provider value={{ searchResults, searchTerm, artists, albums, tracks, searchSpotify, loading, error }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};
