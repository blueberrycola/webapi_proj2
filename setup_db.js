const MongoClient = require('mongodb').MongoClient;
// You can get this connection information from the "Connect" button
// in the mongodb web interface.  Replace my uri below!

const uri = "mongodb+srv://blueberrycola:XpwinXP83PDjr29E@cluster0-kbpps.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, function(err, db) {
  if (err) throw err;
  var dbo = db.db("quarantineJournal");
  var collections = [ "users", "journals", "images", "comments", "locations" ]
  for(collection of collections){
      dbo.createCollection(collection, function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
      });
  }
});
