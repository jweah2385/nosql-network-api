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
      const thought = await Thought.findOne({ _id: req.params.thoughtId }).select(
        '-email -userName'
      );

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
        res.json({ message: 'Course and students deleted!' });
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
};

// const { Thought, Reaction } = require('../models');

// module.exports = {
//   // Get all thoughts
//   async getThoughts(req, res) {
//     try {
//       const thoughts = await Thought.find();
//       res.json(thoughts);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

  // Get one thought
  // async getSingleThought(req, res) {
  //   try {
  //     const thought = await Thought.findOne({
  //       _id: req.params.thoughtId,
  //     }).select('-__v');

  //     if (!thought) {
  //       return res.status(404).json({ message: 'No thought with that ID' });
  //     }

  //     res.json(thought);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
  
//   // Get one thought
// async getSingleThought(req, res) {
//   try {
//     const thought = await Thought.findOne({
//       _id: req.params.thoughtId,
//     }).select('-__v');

//     if (!thought) {
//       return res.status(404).json({ message: 'No thought with that ID' });
//     }

//     res.json(thought);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// },


//   // Create a thought
//   async createThought(req, res) {
//     try {
//       const thought = await Thought.create(req.body);
//       res.json(thought);
//     } catch (err) {
//       if (err.name === 'ValidationError') {
//         // Handle validation error
//         return res.status(400).json(err);
//       } else {
//         console.error(err);
//         return res.status(500).json(err);
//       }
//     }
//   },

//   // Delete a thought
//   async deleteThought(req, res) {
//     try {
//       const thought = await Thought.findOneAndDelete({
//         _id: req.params.thoughtId,
//       });

//       if (!thought) {
//         return res.status(404).json({ message: 'No thought with that ID' });
//       }

//       await Reaction.deleteMany({ _id: { $in: thought.reactions } });
//       res.json({ message: 'Thought and related reactions deleted!' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },

//   // Update a thought
//   async updateThought(req, res) {
//     try {
//       const thought = await Thought.findOneAndUpdate(
//         { _id: req.params.thoughtId },
//         { $set: req.body },
//         { runValidators: true, new: true }
//       );

//       if (!thought) {
//         return res.status(404).json({ message: 'No thought with this ID' });
//       }

//       res.json(thought);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   },
// };
