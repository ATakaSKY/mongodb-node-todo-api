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

  //deletOne
//   db.collection('Todos').deleteOne({completed:false}).then(res => {
//       console.log(res);
//   })

    //deleteMany
    // db.collection('Todos').deleteMany().then(res => {
    //     console.log(res);
    // })

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:true}).then(res => {
        console.log(res);
    })

  client.close();
});