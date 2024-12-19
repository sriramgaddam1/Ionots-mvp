import React, { useEffect, useState } from 'react';
import { fetchProjects, acceptProject } from '../services/api';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects().then((res) => setProjects(res.data));
  }, []);

  const handleAccept = (id) => {
    acceptProject(id, 'user123').then(() => alert('Project accepted!'));
  };

  return (
    <div>
      <h2>Project Dashboard</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            {project.title} - {project.status}
            {project.status === 'available' && (
              <button onClick={() => handleAccept(project._id)}>Accept</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
