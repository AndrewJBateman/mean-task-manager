// connection logic to Mongoddb

const mongoose = require('mongoose');

mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
  console.log('Connected to mongodb successfully')
}).catch((err) => {
  console.log('Error while trying to connect to Mongodb:', err)
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', true);

module.exports = {
  mongoose
}