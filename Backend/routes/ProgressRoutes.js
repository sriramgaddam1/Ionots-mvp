const express = require('express');
const { getProgress, updateProgress } = require('../controllers/progressController');

const router = express.Router();

router.get('/progress/:userId', getProgress);
router.post('/progress/:userId', updateProgress);

module.exports = router;
