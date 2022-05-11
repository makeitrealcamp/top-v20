const express = require('express');
const http = require('http');

const expressConfig = require('./config/express')
const routesConfig = require('./routes')
const db = require('./db/models')

// setup server
const app = express()
const server = http.createServer(app)

expressConfig(app)
routesConfig(app)

function startServer() {
  const PORT = process.env.PORT || 8080
  const IP = process.env.IP || '127.0.0.1'
  server.listen(PORT, IP, async () => {
    console.log(`Servidor corriendo en http://${IP}:${PORT}`)

    try {
      await db.sequelize.authenticate()
      console.log('Conexión a la base de datos exitosa')
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  })
}

setImmediate(startServer)

module.exports = app
