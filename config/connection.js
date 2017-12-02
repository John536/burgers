//sets up database
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,  
  host: "127.0.0.1",
  user: "root",
  password: "Mondo12",
  database: "burgers_db"
});

//connection check for DB
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;