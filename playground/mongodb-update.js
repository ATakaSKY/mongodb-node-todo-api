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

  db.collection('todos').findOneAndUpdate({
      _id:new ObjectID('5b21ee96598b2a085021639f')
  },
  {
    $set: { text: "cm", completed: true },
    $currentDate: { lastModified: true },
    $inc: { completedAt:10 } 
  }).then(doc => {
    console.log(JSON.stringify(doc,undefined,2));
},err => {
    console.log('Error in saving doc')
})

  client.close();
});