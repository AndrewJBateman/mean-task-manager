const express = require('express');
const app = express();

const mongoose = require('./db/mongoose');

const bodyParser = require('body-parser');

// load in the mongoose models
const { List, Task } = require('./db/models');

// Load middleware
app.use(bodyParser.json());

/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET /lists
 * Purpose: get all lists
 */
app.get('/lists', (req, res) => {
  // return an array of lists in the database
  List.find({}).then((lists) => {
    res.send(lists);
  });
});

/**
 * POST /lists
 * Purpose: create a list
 */
app.post('/lists', (req, res) => {
  // create a new list and return the list document back to the user, incl id
  // list information fields will be passed in via the JSON request body
  let title = req.body.title;

  let newList = new List({
    title
  });
  newList.save().then((listDoc) => {
    // full list doc is returned (incl id)
    res.send(listDoc);
  });
});

/**
 * PATCH /lists/:id
 * Purpose: Update a specified list
 */
app.patch('/lists/:id', (req, res) => {
  // update the specified list (list doc with id in the url) with new values specified in the JSON body
  List.findOneAndUpdate({ _id: req.params.id }, {
    $set: req.body
  }).then(() => {
    res.sendStatus(200);
  });
});

/**
 * DELETE /lists/:id
 * Purpose: Delete a list
 */
app.delete('/lists/:id', (req, res) => {
  // delete the specified list (using id in the url)
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});