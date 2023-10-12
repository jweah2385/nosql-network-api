const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');

const currentTime = new Date();

const reactionSchema = new Schema({
  thought: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Thought',
  },
  reactionId: {
    type: mongoose.Schema.Types.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Reaction = model('reaction', reactionSchema);

module.exports = Reaction;
