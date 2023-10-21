const router = require('express').Router();

const {
  getThoughts,
  createThought,
  getSingleThought,
  deleteThought,
  updateThought,
  addReaction,
  getReactions,
} = require('../../controllers/thoughtController');


router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/:thoughtId/reactions').get(getReactions);

router.route("/:thoughtId/reactions").post(addReaction);


module.exports = router;

