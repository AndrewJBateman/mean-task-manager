const express = require('express');
const app = express();

const { mongoose } = require('./db/mongoose');

const bodyParser = require('body-parser');

// load the mongoose models
const { List, Task } = require('./db/models');

// Load middleware
app.use(bodyParser.json());

// CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* ROUTE HANDLERS */

/* LIST ROUTES */

/**
 * GET /lists
 * Purpose: get all lists
 */
app.get('/lists', (req, res) => {
  // returns an array of lists in the database
  List.find({

  }).then((lists) => {
      res.send(lists);
  }).catch((e) => {
      res.send(e);
  });
});

/**
 * POST /lists
 * Purpose: create a list
 */
app.post('/lists', (req, res) => {
  // creates a new list and returns the list document back to the user, including an id
  // list information fields will be passed in via the JSON request body
  let title = req.body.title;
  let newList = new List({
    title
  });

  newList.save().then((listDoc) => {
    // full list doc is returned (including id)
    res.send(listDoc);
  });
});

/**
 * PATCH /lists/:id
 * Purpose: Update a specified list
 */
app.patch('/lists/:id', (req, res) => {
  // updates the specified list (list doc with id in the url) with new values specified in the JSON body
  List.findOneAndUpdate({ _id: req.params.id }, {
    $set: req.body
  }).then(() => {
    res.send({ 'message': 'updated successfully'});
  });
});

/**
 * DELETE /lists/:id
 * Purpose: Delete a list
 */
app.delete('/lists/:id', (req, res) => {
  // deletes the specified list (using id in the url)
  List.findOneAndRemove({
    _id: req.params.id
  }).then((removedListDoc) => {
    res.send(removedListDoc);
  });
});

/**
 * GET /lists/:listId/tasks
 * Purpose: Gets all tasks in a specific list
 */
app.get('/lists/:listId/tasks', (req, res) => {
  // returns all tasks that belong to a specific list
  Task.find({
    _listId: req.params.listId
  }).then((tasks) => {
    res.send(tasks);
  })
});

// app.get('/lists/:listId/tasks/:taskId', (req, res) => {
//   Task.findOne({
//     _id: req.params.taskId,
//     _listId: req.params.listId
//   }).then((task) => {
//     res.send(task)
//   })
// })

/**
 * POST /lists/:listId/tasks
 * Purpose: Create a new task in a specific list
 */
app.post('/lists/:listId/tasks', (req, res) => {
  // creates a new task in a list specified by listId
  let newTask = new Task({
    title: req.body.title,
    _listId: req.params.listId
  });
  newTask.save().then((newTaskDoc) => {
    res.send(newTaskDoc);
  });
})

/**
 * PATCH /lists/:listId/tasks/:taskId
 * Purpose: Update a task in a list specified by listId
 */
app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
  // updates task specified by task id
  Task.findOneAndUpdate({
    _id: req.params.taskId,
    _listId: req.params.listId
  }, {
        $set: req.body
    }).then(() => {
      res.sendStatus(200);
    })
});

/**
 * DELETE /lists/:listId/tasks/:taskId
 * Purpose: Delete a task
 */
app.delete('/lists/:listId/tasks/:taskId', (req, res) => {
  Task.findOneAndRemove({
    _id: req.params.taskId,
    _listId: req.params.listId
  }).then((removedTaskDoc) => {
    res.send(removedTaskDoc);
  })
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});