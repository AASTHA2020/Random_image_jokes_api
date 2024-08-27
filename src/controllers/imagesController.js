const { fetchRandomImage } = require('../utils/fetchData');

// Controller function to handle fetching a random image
async function getRandomImage(req, res) {
  try {
    const imageUrl = await fetchRandomImage();
    res.json({ url: imageUrl });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch image' });
  }
}

module.exports = { getRandomImage };
