const router = require('express').Router();

const {
  getThoughts,
  createThought,
  getSingleThought,
  deleteThought,
  updateThought,
} = require('../../controllers/thoughtController');

// /api/thoughts
// router.route('/thoughts').get(getThoughts);
// router.route('/thoughts').get(getThoughts).post(createThought)
// router.route('/thoughts/:thoughtId').get(getSingleThought);
// router.route('/thoughts/:thoughtId').get(getThoughts).put(updateThought);
// router.route('/thoughts/:thoughtId').get(getThoughts).delete(deleteThought);
// Define routes for /api/thoughts
router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

module.exports = router;

