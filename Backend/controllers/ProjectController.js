const Project = require('../models/Projects');

exports.getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.acceptProject = async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  const project = await Project.findById(id);
  if (project && project.status === 'available') {
    project.status = 'assigned';
    project.assignedTo = userId;
    await project.save();
    res.json({ message: 'Project accepted successfully', project });
  } else {
    res.status(400).json({ message: 'Project not available' });
  }
};
