const express = require('express')
const mongo = require('./mongoConnection')
const webSocketServer = require('websocket').server

const PORT = process.env.PORT || 4001

const app = express()
app.get('/api/:roomId', (req, res) => {
  console.log('PARMAS', req.params)
  res.json({ message: 'Hello from server!' })
})

// app.listen(8003)
const wsServer = new webSocketServer({
  httpServer: app,
  path: '/websockets',
})

wsServer.on('request', function (request) {
  console.log(
    new Date() +
      ' Recieved a new connection from origin ' +
      request.origin +
      '.'
  )
})

mongo.connectToDatabase()

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
