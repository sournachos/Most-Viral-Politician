const router = require("express").Router();
const politicianController = require("../../controllers/politicianController");


// Matches with "/api"
router.route("/")
  .get(politicianController.findAll)
  //.post(politicianController.create);

// Matches with "/api/polprofile/:id"
router.route("/polprofile/:id")
  .get(politicianController.findById)
  //.put(politicianController.update)
  //.delete(politicianController.remove);

module.exports = router;
;
