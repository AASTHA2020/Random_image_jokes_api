const express = require('express');
const jokesRouter = require('./routes/jokes');
const imagesRouter = require('./routes/images');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/jokes', jokesRouter);
app.use('/api/images', imagesRouter);

// Combined Route
app.get('/api/random', async (req, res) => {
  try {
    const [jokeResponse, imageResponse] = await Promise.all([
      axios.get('https://official-joke-api.appspot.com/random_joke'),
      axios.get('https://random.dog/woof.json')
    ]);

    res.json({
      joke: jokeResponse.data,
      image: imageResponse.data.url
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
