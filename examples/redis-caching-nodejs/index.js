const express = require('express');
const axios = require('axios');
const responseTime = require('response-time');
const { createClient } = require('redis');

const app = express();
// const client = createClient({
//   url: 'redis://username:password@host:port',
//   socket: {
//     tls: true,
//     rejectUnauthorized: false
//   }
// });
const client = createClient();

app.use(responseTime());

// Get all characters
app.get('/characters', async (req, res) => {
  try {
    const reply = await client.get(req.originalUrl);

    if (reply) {
      return res.json(JSON.parse(reply));
    }

    // Fetching Data from Rick and Morty API
    const response = await axios.get('https://rickandmortyapi.com/api/character');

    const expires = 500 //60 * 60 * 24; // 24 hours

    await client.set(req.originalUrl, JSON.stringify(response.data));

    return res.json(response.data);

  } catch (error) {
    return res.status(500).send(error);
  }
});

app.get('/characters/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const reply = await client.get(req.originalUrl);

    if (reply) {
      return res.json(JSON.parse(reply));
    }
    // Fetching Data from Rick and Morty API
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);

    const expires = 60 * 60 * 24; // 24 hours

    await client.set(req.originalUrl, JSON.stringify(response.data), {
      EX: expires
    });

    // resond to client
    return res.json(response.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(8080, async () => {
  client.on('error', (err) => console.log('Redis Client Error', err));

  await client.connect();
  console.log('Listening on port 8080');
});
