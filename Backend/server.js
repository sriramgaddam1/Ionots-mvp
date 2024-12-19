const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Sample data storage for projects and progress
let projects = [
  { id: 1, name: 'Project 1', status: 'Not Started' },
  { id: 2, name: 'Project 2', status: 'In Progress' },
];

let progress = { projectId: 1, tasksCompleted: 2, totalTasks: 5 };

// API to fetch all projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// API to accept a project
app.post('/api/projects/accept', (req, res) => {
  const { id } = req.body;
  projects = projects.map((proj) =>
    proj.id === id ? { ...proj, status: 'Accepted' } : proj
  );
  res.json({ message: 'Project accepted successfully!' });
});

// API to get progress
app.get('/api/progress', (req, res) => {
  res.json(progress);
});

// Run the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
