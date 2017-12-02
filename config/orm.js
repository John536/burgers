var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM ?",
            tableInput;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },


    one: function(tableInput, item, cb) {
        var queryString = "SELECT * FROM ? WHERE ID = ?",
            tableInput, item;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    update: function(tableInput, item, id, update, cb) {
        var queryString = "UPDATE ? FROM ? WHERE ? = ?",
            tableInput, item, id, update;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);

        });
    }
}

module.exports = orm;