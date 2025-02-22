const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    skill: {
      type: String,
    },
    noOfGames: {
      type: Number,
      default: 0,
    },
    playpals: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    sports: [
      {
        type: String,
      },
    ],
  },
  {timeseries: true},
);

const User = mongoose.model('User', userSchema);

module.exports = User;
