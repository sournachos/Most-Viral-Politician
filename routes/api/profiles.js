const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/profiles"
router.route("/")
  .get(politicianController.findAll)
  .post(politicianController.create);

// Matches with "/api/profiles/:id"
router
  .route("/:id")
  .get(politicianController.findById)
  .put(politicianController.update)
  .delete(politicianController.remove);

module.exports = router;
