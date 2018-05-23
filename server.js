const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const connection = mysql.createConnection({
  host: process.env.JAWSDB_URL,
  user: process.env.username,
  password: process.env.password,
  database: process.env.database
});

connection.connect(error => {
  if (error) {
    console.log(error);
  }
  console.log('connected');
});

app.get('/api/data', (req, res) => {
  connection.query('SELECT * FROM products LIMIT 10', (error, rows, fields) => {
    if (error) {
      throw error;
    } else {
      res.json(rows);
    }
  });
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
