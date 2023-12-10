const Pool = require('pg').Pool
const pool = new Pool({
  user: 'brandsql',
  host: 'localhost',
  database: 'favlinks',
  password: 'Gh8912',
  port: 5432,
})