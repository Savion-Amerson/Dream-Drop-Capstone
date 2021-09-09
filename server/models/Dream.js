const mongoose = require("mongoose");

// const commentSchema = mongoose.Schema({
//   text: String
// });

const DreamSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: String,
  date: {
    type: Date,
    default: Date.now
  },
  comments: String
});

const Dream = mongoose.model("Dream", DreamSchema);

module.exports = {
  model: Dream,
  schema: DreamSchema
};
