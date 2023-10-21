const { Thought, Reaction } = require('../models');

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find().select('-users');
      res.json(thoughts);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get one thought
  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({
        _id: req.params.thoughtId,
      }).select('-email -userName');

      if (!thought) {
        return res.status(404).json({ message: 'No thought with that ID' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);
      res.json(thought);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a thought
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({
        _id: req.params.thoughtId,
      });

      if (!thought) {
        res.status(404).json({ message: 'No thought with that ID' });
      }

      await Reaction.deleteMany({ _id: { $in: thought.reactions } });
      res.json({ message: 'Thought deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No thought with this id!' });
      }

      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getReactions(req, res) {
    try {
      const reactions = await Thought.find().select('reactions');
      res.json(reactions);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // async addReaction(req, res) {
  //   try {
  //     const thought = await Thought.findOneAndUpdate(
  //       { _id: req.params.thoughtId },
  //       { $push: { reactions: req.body } },
  //       { runValidators: true, new: true}
  //     );
  //     if(!thought) {
  //       return res.status(404).json({message: "No id"})
  //     }
  //     res.status(200).json(thought);
  //   } catch (err) {
  //     res.status(500).json(err)
  //   }
  // }

  // ADD NEW REACTION TO THOUGHT'S REACTION ARRAY
  addReaction: async (req, res) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $push: { reactions: req.body } },
        { runValiators: true, new: true }
      );

      if (!thought) {
        return res
          .status(404)
          .json({ message: 'No thought was found with that id.' });
      }

      res.status(200).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
