const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/pinterest');

const plm = require('passport-local-mongoose');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  profileImage: String,
  contact: Number,
  boards: {
    type: Array,
    default: []
  },
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm); // this will add a username, hash and salt field to store the username, the hashed password and the salt value.

module.exports = mongoose.model('User', userSchema);
