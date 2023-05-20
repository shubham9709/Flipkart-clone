const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
  Phone: Number,
});
const User = new mongoose.model("user", userSchema);
module.exports = User;
