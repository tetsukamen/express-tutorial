var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Genre = new Schema({
  name: { type: String, required: true, max: 100, min: 3 },
});

Genre.virtual("url").get(function () {
  return "/catalog/genres/" + this._id;
});

//Export model
module.exports = mongoose.model("Genre", Genre);
