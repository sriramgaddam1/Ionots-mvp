const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: String,
  projectId: String,
  tasksCompleted: { type: Number, default: 0 },
  totalTasks: Number,
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('Progress', progressSchema);
