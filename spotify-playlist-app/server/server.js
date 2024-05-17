import express from 'express';
import axios from 'axios';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import querystring from 'querystring';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const redirect_uri = process.env.SPOTIFY_REDIRECT_URI;
const PORT = process.env.PORT || 5000;

const generateRandomString = (length) => {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
};

const stateKey = 'spotify_auth_state';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, '../client/build')))
   .use(cors())
   .use(cookieParser());

app.get('/login', (req, res) => {
  const state = generateRandomString(16);
  res.cookie(stateKey, state);

  const scope = 'user-read-private user-read-email playlist-modify-public playlist-modify-private';
  const authUrl = 'https://accounts.spotify.com/authorize?' + querystring.stringify({
    response_type: 'code',
    client_id,
    scope,
    redirect_uri,
    state,
  });

  res.redirect(authUrl);
});

app.get('/callback', async (req, res) => {
  const { code, state } = req.query;
  const storedState = req.cookies ? req.cookies[stateKey] : null;

  if (state === null || state !== storedState) {
    res.redirect('/login?' + querystring.stringify({ error: 'state_mismatch' }));
    return;
  }

  res.clearCookie(stateKey);

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
      code,
      redirect_uri,
      grant_type: 'authorization_code',
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
      },
    });

    const { access_token, refresh_token } = response.data;
    res.redirect(`http://localhost:3000/callback?${querystring.stringify({ access_token, refresh_token })}`);
  } catch (error) {
    res.redirect('/login?' + querystring.stringify({ error: 'invalid_token' }));
  }
});

app.get('/refresh_token', async (req, res) => {
  const { refresh_token } = req.query;

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(`${client_id}:${client_secret}`).toString('base64'),
      },
    });

    res.json({ access_token: response.data.access_token });
  } catch (error) {
    res.status(500).send('Failed to refresh token');
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
