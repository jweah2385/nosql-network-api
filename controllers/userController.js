
const { User, Thought } = require('../models');

module.exports = {
  // Get all users
  async getCourses(req, res) {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get one user
  async getSingleCourse(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        '-__v'
      );

      if (!user) {
        return res.status(404).json({ message: 'No course with that ID' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a user
  async createCourse(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteCourse(req, res) {
    try {
      const user = await User.findOneAndDelete({
        _id: req.params.userId,
      });

      if (!user) {
        res.status(404).json({ message: 'No course with that ID' });
      }

    //   await Thought.deleteMany({ _id: { $in: course.thoughts } });
    //   res.json({ message: 'Course and students deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a user
  async updateCourse(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        res.status(404).json({ message: 'No course with this id!' });
      }

      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};