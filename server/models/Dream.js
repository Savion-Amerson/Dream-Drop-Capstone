const mongoose = require("mongoose");

const DreamSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: String,
  date: {
    type: Date,
    default: Date.now
  }
});

const Dream = mongoose.model("Dream", DreamSchema);

module.exports = {
  model: Dream,
  schema: DreamSchema
};
