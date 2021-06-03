const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  "mongodb+srv://hello:hello@cluster0.txmw4.mongodb.net/houseoftexas?retryWrites=true&w=majority"
);

const polSeed = [
  {
    _id: 1,
    name: "Stephen King",
    twitter:"@nottherealhamza",
    facebook:"@yourmomiscute",
    phone:"123-455-6789",
    email:"email@example.com",
    image:"https://i.imgflip.com/4cis9f.png",
  },
  {
    _id: 2,
    name: "Stephen King",
    twitter:"@nottherealhamza",
    facebook:"@yourmomiscute",
    phone:"123-455-6789",
    email:"email@example.com",
    image:"https://i.imgflip.com/4cis9f.png",
  },
  {
    _id: 3,
    name: "Stephen King",
    twitter:"@nottherealhamza",
    facebook:"@yourmomiscute",
    phone:"123-455-6789",
    email:"email@example.com",
    image:"https://i.imgflip.com/4cis9f.png",
  },
];

db.houseoftexas
  .remove({})
  .then(() => db.houseoftexas.collection.insertMany(polSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
