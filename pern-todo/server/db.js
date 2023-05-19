const Pool = require("pg").Pool; // pg library

// configurations inside
const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "perntodo",
});
// above connect the database

//export this // use this pool in another file -> go to index.js to see
module.exports = pool;
