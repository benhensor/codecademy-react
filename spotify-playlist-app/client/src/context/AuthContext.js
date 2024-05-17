import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refresh_token'));
  const [userData, setUserData] = useState(null);

  const refreshAccessToken = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/refresh_token`, {
        params: {
          refresh_token: refreshToken,
        },
      });
      const newAccessToken = response.data.access_token;
      localStorage.setItem('access_token', newAccessToken);
      setAccessToken(newAccessToken);
    } catch (error) {
      console.error('Error refreshing access token:', error);
      // Handle the error, e.g., redirect to login
    }
  }, [refreshToken]);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!accessToken) return;

      try {
        const response = await axios.get('https://api.spotify.com/v1/me', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Token is expired or invalid, try to refresh it
          await refreshAccessToken();
        } else {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, [accessToken, refreshAccessToken]);

  return (
    <AuthContext.Provider value={{ accessToken, refreshAccessToken, userData, setAccessToken, setRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
