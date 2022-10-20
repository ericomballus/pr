const mongoose = require("mongoose");
var Schema = mongoose.Schema;

const UserSchema = new Schema({
  created: { type: Date, default: Date.now },
  firstName: { type: String, default: " ", required: true },
  lastName: { type: String, default: " ", required: true },
  email: { type: String, default: " ", required: true },
  UserAccessRight: { type: Number, default: 10, required: true },
});
module.exports = mongoose.model("User", UserSchema);
