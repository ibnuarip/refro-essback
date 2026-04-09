require('dotenv').config({ path: __dirname + '/.env' })
const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello!' })
})

// Contoh endpoint mengambil data (misal table 'users')
app.get('/api/users', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM users')
    res.json(rows)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Server jalan di port ${process.env.PORT}`)
})