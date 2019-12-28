module.exports = {
  get: function(req, res){

	database(function(err, connection){
		
    	var r = [];

		// query
    	var sql = `SELECT * FROM customer`;

    	// database query
		connection.query(sql, function(err, rows, fields){

			// check for error
			if(err){
				res.send(err);
			}

			// check if rows is empty
			if(rows == ''){
				r.push({'message': 'No data found!'});
				r.push({'data': ''});
			}
			else{
				r.push({'message': 'Total result: ' + rows.length});
				r.push({'data': rows});
			}
			
			res.json(r);

		});

		connection.release();
	});
  },
  getCustomer: function(req, res){

    database(function(err, connection){

    	var r = [];
		var id = req.params.id;
		var sql = "SELECT * FROM customer WHERE customerId = ?";

		// database query
		connection.query(sql, [id], function(err, rows, fields){

			// check for error
			if(err){
				res.send(err);
			}

			// check if rows is empty
			if(rows == ''){
				r.push({'message': 'No data found!'});
				r.push({'data': ''});
			}
			else{
				r.push({'message': 'Total result: ' + rows.length});
				r.push({'data': rows});
			}

			res.json(r);

		});

		connection.release();
	});
  },
}

module.exports.name = path.basename(__filename, '.js');
