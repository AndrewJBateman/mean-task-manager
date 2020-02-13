// connection logic to Mongodb

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
  console.log('Connected to Mongodb successfully');
}).catch((e) => {
  console.log('Error while trying to connect to Mongodb:', e)
});

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

module.exports = {
  mongoose
}