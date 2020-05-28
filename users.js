// All user endpoints in this file
module.exports = function(app){
	// Get all users
	app.get('/users/', (req, res) => {
			const db = req.app.locals.db;
			const collection = db.collection('users');
			collection.find().toArray(function(err, data){
					console.log(data);
					res.send(data);
					});
			});
	// Get a specific user
	app.get('/users/:id', function (req, res) {
		let id = req.params["id"];
		const db = req.app.locals.db;
		console.log(id);
		const collection = db.collection('users');
		var mongo = require('mongodb');
		var o_id = new mongo.ObjectID(id);
		var name = collection.find({'_id': o_id});
		//res.send(name);
		console.log(name);


		
	});
	app.put('/users/:id', function (req, res) {
		res.send('put request to the homepage')
		console.log(req.body);
		res.status(200).send("200 - Successful")
	})
	app.post('/users/:id', function (req, res) {
		res.send('post request to the homepage')
	})
	app.delete('/users/:id', function (req, res) {
		res.send('delete request to the homepage')
	})
	
};

