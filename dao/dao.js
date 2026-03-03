// "Base de Datos" temporal
let tasks = [
    { id: 1, title: 'Tarea fija', completed: true },
];

// Operación READ
const findAll = () => {
    return tasks;
};

// Operación CREATE
const create = (data) => {
    const newTask = {
        id: tasks.length + 1,
        title: data.title,
        completed: false
    };
    tasks.push(newTask);
    return newTask;
};

module.exports = {
    findAll,
    create
};