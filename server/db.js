module.exports = {
  getLinks,
}

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'brandsql',
  host: 'localhost',
  database: 'favlinks',
  password: 'Gh8912',
  port: 5432,
})

//ROUTES

//CREATE ROUTE(ADDS NEW LINK INTO DATABASE)
app.post('/api/links', (req,res) => {
pool.query('INSERT INTO linksapi(name, url,...) VALUES(name, url)', (error, results) => {
  if (error) {
    throw error
  }
  res.status(200).json(results.rows)
})
})

//READ ROUTE (GET DATA FROM DATABASE)
app.get('/api/links', (req, res) => {
  pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})

//UPDATE ROUTE (UPDATE A LINK IN THE DATABASE)
app.post('/api/links/:id', (req,res) => {
  pool.query('UPDATE favlinks SET (name), url WHERE (id)', (error, results) => {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})

//DELETE ROUTE (DELETE A SPECIFIC LINK IN DATABASE USING ID)
app.post('/api/links/:id', (req,res) => {
  pool.query('DELETE FROM favlinks WHERE (id)', (error, results)=> {
    if (error) {
      throw error
    }
    res.status(200).json(results.rows)
  })
})