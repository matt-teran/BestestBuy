const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const host = process.env.DB_HOST || 'localhost';
const user = process.env.DB_USER || 'root';
const pass = process.env.DB_PASS || '';
const dbName = process.env.DB_NAME || 'cruddyAmazon';

const connection = mysql.createConnection({
  host: host,
  user: user,
  password: pass,
  database: dbName,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
