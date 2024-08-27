const express = require('express');
const { fetchRandomJoke } = require('../utils/fetchData');

const router = express.Router();

// Route to get random joke
router.get('/random', async (req, res) => {
  try {
    const joke = await fetchRandomJoke();
    res.json(joke);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

module.exports = router;
