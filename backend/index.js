require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello!' })
})

app.listen(process.env.PORT, () => {
  console.log(`Server jalan di port ${process.env.PORT}`)
})