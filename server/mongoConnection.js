const { MongoClient, ServerApiVersion } = require('mongodb')
const uri =
  'mongodb+srv://marian:SgR2PCXkTVEdTtAR@cluster0.whjqy.mongodb.net/?retryWrites=true&w=majority'

async function connectToDatabase() {
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  })

  try {
    await client.connect()
    const collection = client.db('test').collection('messages')
    console.log('')
    await collection.insertOne({ user1: 'TEST MESSAGE', date: Date.now() })
  } catch (e) {
    console.error(e)
  } finally {
    await client.close()
  }
}

module.exports = { connectToDatabase }
