const axios = require('axios');

// Function to fetch random joke
async function fetchRandomJoke() {
  const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
  return response.data;
}

// Function to fetch random image
async function fetchRandomImage() {
  const response = await axios.get('https://random.dog/woof.json');
  return response.data.url;
}

module.exports = { fetchRandomJoke, fetchRandomImage };
