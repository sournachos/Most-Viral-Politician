const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const texas_congress = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  twitter: {
    url:{ type: String, required: true },
    handle:{ type: String, required: true},
  },
  facebook: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  image:{ type: String, required: true },
  party:{ type: String, required: true }
}, {collection: 'texas_congress'});

const houseoftexas = mongoose.model("houseoftexas", texas_congress);

module.exports = houseoftexas;
