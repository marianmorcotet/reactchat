const express = require('express')
const mongo = require('./mongoConnection')
const WebSocket = require('ws')

const PORT = process.env.PORT || 4001

const app = express()
app.get('/api/:roomId', (req, res) => {
  console.log('PARMAS', req.params)
  res.json({ message: 'Hello from server!' })
})

const users = new Set()

function sendMessage(message) {
  users.forEach((user) => {
    user.ws.send(JSON.stringify(message))
  })
}

const server = new WebSocket.Server(
  {
    port: 8080,
  },
  () => {
    console.log('Server started on port 8080')
  }
)
server.on('connection', (ws) => {
  const userRef = {
    ws,
  }
  users.add(userRef)
  ws.on('message', (message) => {
    console.log(message)
    try {
      sendMessage('response')
    } catch (e) {
      console.error('Error passing message!', e)
    }
  })

  ws.on('close', (code, reason) => {
    users.delete(userRef)
    console.log(`Connection closed: ${code} ${reason}!`)
  })
})

mongo.connectToDatabase()

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})

// const wsServer = new webSocketServer({
//   httpServer: server,
//   path: '/websockets',
// })
// console.log('what', wsServer)
// wsServer.on('request', function (request) {
//   console.log(
//     new Date() +
//       ' Recieved a new connection from origin ' +
//       request.origin +
//       '.'
//   )
// })
