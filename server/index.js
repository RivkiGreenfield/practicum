const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')
const helmet = require('helmet')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())
app.use(helmet())
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})

app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ status: 'ok', db: 'connected' })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM test')
    res.json({ status: 'ok', data: result.rows })
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message })
  }
})
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})