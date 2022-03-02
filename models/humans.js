const { Schema, model } = require("mongoose");

const humansSchema = Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  region: {
    type: String,
  },
  country: {
    type: String,
  },
});

module.exports = model("Human", humansSchema);
