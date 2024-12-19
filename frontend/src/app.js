import React, { useState, useEffect } from 'react';


function App() {
  const [projects, setProjects] = useState([]);
  const [progress, setProgress] = useState(null);

  // Fetch projects from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/projects').then((res) => {
      setProjects(res.data);
    });

    axios.get('http://localhost:5000/api/progress').then((res) => {
      setProgress(res.data);
    });
  }, []);

  // Accept a project
  const acceptProject = (id) => {
    axios.post('http://localhost:5000/api/projects/accept', { id }).then(() => {
      const updatedProjects = projects.map((proj) =>
        proj.id === id ? { ...proj, status: 'Accepted' } : proj
      );
      setProjects(updatedProjects);
    });
  };

  return (
    <div>
      <h1>Ionots MVP</h1>
      <h2>Project Assignment Module</h2>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} - Status: {project.status}{' '}
            {project.status === 'Not Started' && (
              <button onClick={() => acceptProject(project.id)}>Accept</button>
            )}
          </li>
        ))}
      </ul>

      <h2>Progress Tracking</h2>
      {progress && (
        <p>
          Tasks Completed: {progress.tasksCompleted} / {progress.totalTasks}
        </p>
      )}
    </div>
  );
}

export default App;
