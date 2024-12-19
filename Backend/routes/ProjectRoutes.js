const express = require('express');
const { getProjects, acceptProject } = require('../controllers/projectController');

const router = express.Router();

router.get('/projects', getProjects);
router.post('/projects/:id/accept', acceptProject);

module.exports = router;
