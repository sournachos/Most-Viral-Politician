const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const texas_congress = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  twitter: { type: String, required: true },
  facebook: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  image:{ type: String, required: true }
}, {collection: 'texas_congress'});

const Profile = mongoose.model("Profile", texas_congress);

module.exports = Profile;
