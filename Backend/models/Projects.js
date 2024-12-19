const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: { type: String, default: 'available' },
  assignedTo: { type: String, default: null },
});

module.exports = mongoose.model('Project', projectSchema);
