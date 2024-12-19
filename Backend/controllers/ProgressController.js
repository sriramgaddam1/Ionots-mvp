const Progress = require('../models/Progress');

exports.getProgress = async (req, res) => {
  const { userId } = req.params;
  const progress = await Progress.find({ userId });
  res.json(progress);
};

exports.updateProgress = async (req, res) => {
  const { userId } = req.params;
  const { projectId, tasksCompleted, totalTasks } = req.body;

  const score = (tasksCompleted / totalTasks) * 100;

  const progress = await Progress.findOneAndUpdate(
    { userId, projectId },
    { tasksCompleted, totalTasks, score },
    { upsert: true, new: true }
  );

  res.json({ message: 'Progress updated successfully', progress });
};
