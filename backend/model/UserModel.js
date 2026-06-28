const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }
});

// This plugin adds username, hash, and salt fields to store the password securely
UserSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model("User", UserSchema);

module.exports = { UserModel };
