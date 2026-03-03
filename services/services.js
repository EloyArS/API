const TaskDao = require('../dao/dao');

const getAllTasks = () => {
    return TaskDao.findAll();
};

const createNewTask = (title) => {
    return TaskDao.create({ title });
};

module.exports = { getAllTasks, createNewTask };