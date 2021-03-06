const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'TodoApp';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);

  if(err)
    return console.log('Failed to connect to the database');

  console.log("Connected successfully to server");

  const db = client.db(dbName);

  db.collection('Users').insertOne({
    user:'Jen',
    age:26
  },(err,result) => {
    if(err) return console.log('Unable to insert todo', err);

    console.log(JSON.stringify(result.ops,undefined,2));
  })

  client.close();
});