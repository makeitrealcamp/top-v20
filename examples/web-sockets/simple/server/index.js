const express = require('express');
const websocket = require('express-ws');

const app = express();

websocket(app);

app.ws('/chat', (ws, res) => {
  ws.on('message', msg => {
    console.log('Mensaje recibido en el server:', msg);

    // ws.send(
    //   `Mensaje recibido en el server: ${new Date().getMinutes()}:${new Date().getSeconds()}`
    // );
  });

  ws.send('Hola mundo');

  // setInterval(() => {
  //   const latLng = {
  //     lat: Math.random() * (40.7128 - 40.7122) + 40.7122,
  //     lng: Math.random() * (-74.0060 - -74.0064) + -74.0064
  //   }
  //   ws.send(JSON.stringify(latLng));
  // }, 3000);

  ws.on('close', () => {
    console.log('Conexion cerrada');
  })
})

app.listen(8080, () => {
  console.log('Server started');
})
