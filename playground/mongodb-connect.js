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

  // db.collection('Todos').insertOne({
  //   todo:'first todo',
  //   completed:true
  // },(err,result) => {
  //   if(err) return console.log('Unable to insert todo', err);

  //   console.log(JSON.stringify(result.ops,undefined,2));
  // })

  db.collection('Todos').find({
    _id:new ObjectID('5b209c884390795e5d81083f')
  }).toArray().then(data => {
    console.log("Todos");
    console.log(JSON.stringify(data,undefined,2))
  },err => {
    console.log('Error in fetching todos');
  })

  client.close();
});