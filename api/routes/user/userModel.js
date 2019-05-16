'use strict';

const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true, // email is set to unique to prevent multiple signups with the same email
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.methods.comparePassword = function(plain) {
  // use bcrypt to compare a plaintext password to a hash
  return bcrypt.compare(plain, this.password);
};

// before a new user is saved
userSchema.pre('save', async function(next) {
  const user = this
  // if the user's password has changed since the last time the user was saved, or if this is a completely new user
  if (user.isModified('password') || user.isNew) {
    try {
      // hash their password
      const hash = await bcrypt.hash(user.password, 10)
      // set their password to be equal to the hash
      user.password = hash
      next()
    } catch (e) {
      next(e)
    }
  } else {
    return next()
  }
})

exports.model = model('User', userSchema)
