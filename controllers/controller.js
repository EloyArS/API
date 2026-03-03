const TaskServices = require('../services/services');

const getTasks = (req, res) => {
    const tasks = TaskServices.getAllTasks();
    res.json(tasks);
};

const createTask = (req, res) => {
    const { title } = req.body;
    const newTask = TaskServices.createNewTask(title);
    res.status(201).json(newTask);
};

module.exports = { getTasks, createTask };