const express = require('express')

const PORT = process.env.PORT || 4001

const app = express()
app.get('/api/:roomId', (req, res) => {
  console.log('PARMAS', req.params)
  res.json({ message: 'Hello from server!' })
})
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
