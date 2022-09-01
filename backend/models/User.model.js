const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mob_num: { type: Number, required: true },
  password: { type: String, required: true },
  about: { type: String, required: true },
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
