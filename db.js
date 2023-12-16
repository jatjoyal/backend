const mongoose = require('mongoose');
var mongoUrl = 'mongodb+srv://muhammedmoosa369:123@cluster0.vnxaays.mongodb.net/mern-user';

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Database Connected');
  })
  .catch(err => {
    console.log(err);
  });

module.exports = mongoose;
