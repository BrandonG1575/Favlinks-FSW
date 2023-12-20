//EXPORTING CRUD FUNCTIONS
module.exports = {
  createLink,
  getLinks,
  updateLink,
  deleteLink
}

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'BrandSQL',
  host: 'localhost',
  database: 'linksAPI',
  password: 'Gh8912',
  port: 5432,
})

//ROUTES

//CREATE ROUTE(ADDS NEW LINK INTO DATABASE)
const createLink = (req, res) => {
  const{name, url} = request.body

  pool.query('INSERT INTO favlinks (name, url) VALUES ($1, $2) RETURNING *', [name, email], (error, results) =>{
    if (error) {
      throw error
    }
    response.status(201).send(`Link added with ID: ${results.rows[0].id}`)
  })
}

//READ ROUTE (GET DATA FROM DATABASE)
const getLinks = (req, res) => {
  pool.query('SELECT * FROM favlinks ORDER BY id ASC', (error, result) => {
    if (error) {
      throw error
    }
    res.status(200).json(result.rows)
  })
}

//UPDATE ROUTE (UPDATE A LINK IN THE DATABASE)
const updateLink = (req, res) => {
  const id = parseInt(request.params.id)
  const {name, url} = request.body

  pool.query(
    'UPDATE favlinks SET name = $1, url = $2 WHERE id = $3',
    [name, url, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Link modified with ID: ${id}`)
    }
  )
}

//DELETE ROUTE (DELETE A SPECIFIC LINK IN DATABASE USING ID)
const deleteLink = (req, res) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM favlinks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Link deleted with ID: ${id}`)
  })
}
