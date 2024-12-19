import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchProjects = async () => await axios.get(`${API_URL}/projects`);
export const acceptProject = async (id, userId) =>
  await axios.post(`${API_URL}/projects/${id}/accept`, { userId });
export const fetchProgress = async (userId) =>
  await axios.get(`${API_URL}/progress/${userId}`);
