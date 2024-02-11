const router = require("express").Router();
const {
  allThoughts,
  thoughtsById,
  createThought,
  deletThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// http://localhost:300l/thought
router.route("/").get(allThoughts).post(createThought);
// http://localhost:300l/thought/:thoughtId
router
  .route("/:thoughtId")
  .get(thoughtsById)
  .put(updateThought)
  .delete(deletThought);

router.route("/:thoughtId/reactions").post(createReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
module.exports = router;
