const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/controller');

router.get('/', TaskController.getTasks);
router.post('/', TaskController.createTask);

module.exports = router;