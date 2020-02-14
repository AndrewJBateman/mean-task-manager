# NodeJS Backend for MEAN Stack Task Manager - Tutorial Code by Devstackr

* Backend API using Node.js with Mongoose and Express.

* All code by [Devstackr](https://www.youtube.com/channel/UCbwsS1m4Hib6R-9F1alus_A/featured).

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* 

## Screenshots

![Node.js page](./img/get.png)

## Technologies

* [Node.js v12.4.0](https://nodejs.org/en/) asynchronous event-driven JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Mongoose v5.8.11](https://mongoosejs.com/) mongodb object modeling for node.js
* [Postman v7.18.0](https://www.postman.com/downloads/) API Dev Environment
* [Lodash v4.17.15](https://lodash.com/) Javascript utility library
* [bcryptjs v2.4.3](https://www.npmjs.com/package/bcrypt) password hashing function
* [jsonwebtoken v8.5.1](https://www.npmjs.com/package/jsonwebtoken) JSON Web Tokens
* [CORS on ExpressJS](https://enable-cors.org/server_expressjs.html)


## Setup

* Important note: This node.js app requires Mongodb to be installed and run. `C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe`
* To start the server on _localhost://27017_ type: 'nodemon app.js'

## Code Examples

* Express app.get() method http GET request to return list of tasks for a specified List id.

```javascript
/**
 * GET /lists/:listId/tasks
 * Purpose: Gets all tasks in a specific list
 */
app.get('/lists/:listId/tasks', (req, res) => {
  // return all tasks that belong to a specific list
  Task.find({
    _listId: req.params.listId
  }).then((tasks) => {
    res.send(tasks);
  })
});
```

## Features

* CORS header middleware used to avoid problems with same-origin policy and allow browser and server to communicate.

## Status & To-do list

* Status: Fully working. Connecting with Mongodb. Postman successfully used to test POST, GET, PATCH, DELETE a list, POST, GET, PATCH, DELETE a task in a list.

* To-do: complete integration of this backend API with the Angular Frontend.

## Inspiration

* [Building the API | NodeJS, Express and Mongoose - [3] Build a Task Manager w/ MEAN Stack](https://www.youtube.com/watch?v=P3R-8jj3S7U&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd&index=3)
* [Devstackr: Github repo](https://github.com/Devstackr/task-manager-mean-stack/tree/master/api)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!