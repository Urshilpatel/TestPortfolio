const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Weather Route
app.get('/api/weather', async (req, res) => {
  try {
    const city = req.query.city || 'Montreal';
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error.message);
    res.status(500).json({ error: 'Failed to fetch weather data', details: error.message });
  }
});

app.get('/api/github', async (req, res) => {
  try {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_API_TOKEN;
    const response = await axios.get(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `token ${token}`
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching GitHub data:', error.message);
    res.status(500).json({ error: 'Failed to fetch GitHub data', details: error.message });
  }
});
// The "catchall" handler: for any request that doesn't match any API routes, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
