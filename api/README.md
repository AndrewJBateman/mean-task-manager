# NodeJS Backend for MEAN Stack Task Manager - Tutorial Code by Devstackr

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

* Backend API using Node.js with Mongoose and Express
* Includes sign-up/log-in using JWT authentication web tokens
* If local storage cleared via google dev tools Application-Storage then app correctly reverts to /login page.

## Screenshots

![Node.js page](./img/get.png)

## Technologies

* [Node.js v12.4.0](https://nodejs.org/en/) asynchronous event-driven JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Mongoose v5.9.2](https://mongoosejs.com/) mongodb object modeling for node.js
* [Lodash v4.17.15](https://lodash.com/) Javascript utility library
* [bcryptjs v2.4.3](https://www.npmjs.com/package/bcrypt) password hashing function
* [jsonwebtoken v8.5.1](https://www.npmjs.com/package/jsonwebtoken) JSON Authentication Web Tokens
* [CORS on ExpressJS](https://enable-cors.org/server_expressjs.html)
* [Random String Generator](https://www.random.org/strings/)


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

* CORS header middleware used to avoid problems with same-origin policy and allow browser and server to communicate
* Mongoose [model.deleteMany](https://mongoosejs.com/docs/api/model.html#model_Model.deleteMany) method used
* local storage used to store auth tokens