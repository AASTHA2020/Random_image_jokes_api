const { fetchRandomJoke } = require('../utils/fetchData');

// Controller function to handle fetching a random joke
async function getRandomJoke(req, res) {
  try {
    const joke = await fetchRandomJoke();
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
}

module.exports = { getRandomJoke };
