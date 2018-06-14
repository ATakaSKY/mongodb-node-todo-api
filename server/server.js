const { mongoose } = require('./db/mongoose');
const { User } = require('./models/user');
const { Todo } = require('./models/todo');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var newTodo = new Todo({
        text: req.body.text,
        completed: false,
        completedAt: 345
    })

    newTodo.save().then(doc => {
        res.send(doc);
    },err => {
        res.status(400).send(err);
    })
})

app.listen('3000', () => {
    console.log('Application listening on port 3000');
})

// newTodo.save().then(doc => {
//     console.log(JSON.stringify(doc,undefined,2));
// },err => {
//     console.log('Error in saving doc')
// })


