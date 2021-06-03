const db = require("../models");

// Defining methods for the politicianController
module.exports = {
  findAll: function(req, res) {
    db.houseoftexas
      .find()
      .sort({ _id: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.houseoftexas
      .findById(req.params._id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
