var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      match: /@/,
    },
    age: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
