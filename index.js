//Create app instance of express and create port var
const express = require('express');
const app = express();
const port = 9090;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Route is a handler to a particular command

function getUsers(req, res) {
	let id = req.params["id"];
	res.send(users[id]);
};
function putUsers(req, res) {
	console.log(req.body);
	res.status(200).send("Thanks!");

};

var users = [{ "id":42, "name":"ira"},
	     { "id":24, "name":"sarah"},
	     { "id":420, "name":"chase"}
];


//If '/users/ invoked use handler()
app.get("/users/:id", getUsers );
app.put("/users", putUsers );
//Listener to trigger the handler()
app.listen(port, () => console.log(`Begin; listening on port ${port}`));

//Lambda Example for get and put
//app.get("/users", (req, res) => res.send("Howdy") );
//app.put("/users", (req, res) => res.send("Partner"));
