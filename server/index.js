const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()
const port = 3000

//Endpoint Routes connecting to db routes
app.post('/api/links', db.createLink)
app.get('/api/links', db.getLinks)
app.put('/api/links/:id', db.updateLink)
app.delete('/api/links/:id', db.deleteLink)

app.use(express.json())
app.use(cors())

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})