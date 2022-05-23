const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const messages = [
  {
    id: 1,
    text: 'Hello World',
    author: '@khriztianmoreno'
  }
]

app.use(express.static('public'));

app.get('/hello', (req, res) => {
  res.status(200).json({ msg: 'Hello World!' });
})

io.on('connection', (socket) => {
  // Recibimos una nueva conexión
  console.log('New connection', socket.id);

  io.emit('messages', messages);

  socket.on('message:add', (message) => {
    console.log('New message', message);
    messages.push(message);

    io.emit('messages', messages);
  })
})

server.listen(8080, () => {
  console.log('Server is running on http://localhost:8080');
})
