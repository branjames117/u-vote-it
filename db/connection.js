const mysql = require('mysql2');

// connect to database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '2qD%Ac4Bt',
  database: 'election',
});

module.exports = db;
