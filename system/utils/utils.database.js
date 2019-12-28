var mysql = require('mysql');

connection = config.database;
var pool = mysql.createPool({
  connectionLimit: 100,
  host: connection.host,
  user: connection.user,
  password: connection.password,
  database: connection.database,
});

module.exports = function(callback){
  pool.getConnection(function(err, connection){
  	if(err){
  		throw err;
  	}
    connection.connect();
    callback(err, connection);
  });
}