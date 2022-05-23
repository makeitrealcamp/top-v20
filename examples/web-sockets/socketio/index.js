const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const { faker } = require('@faker-js/faker');

const app = express();
const server = http.Server(app);
const io = socketio(server);

app.use(express.static('public'))

app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
})

server.listen(8080, () => {
  console.log('Server is running http://localhost:8080');
})
