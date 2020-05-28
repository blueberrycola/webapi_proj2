// All user endpoints in this file
module.exports = function(app){
	// Get users
	app.get('/', (req, res) => {
			const db = req.app.locals.db;
			const collection = db.collection('users');
			collection.find().toArray(function(err, data){
					console.log(data);
					res.send(data);
					});
			});
	app.get('/users/:id', function (req, res) {
		res.send('GET request to the homepage')
	})
	app.put('/users/:id', function (req, res) {
		res.send('put request to the homepage')
	})
	app.post('/users/:id', function (req, res) {
		res.send('post request to the homepage')
	})
	app.delete('/users/:id', function (req, res) {
		res.send('delete request to the homepage')
	})
	
};
