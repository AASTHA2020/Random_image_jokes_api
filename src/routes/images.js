const express = require('express');
const { fetchRandomImage } = require('../utils/fetchData');

const router = express.Router();

// Route to get random image
router.get('/random', async (req, res) => {
  try {
    const imageUrl = await fetchRandomImage();
    res.json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
});

module.exports = router;
