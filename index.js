const express = require('express');
const app = express();

const TaskRoutes = require('./routes/routes'); 

app.use(express.json());
app.use('/tasks', TaskRoutes);

app.get('/', (req, res) => {
    res.send('<h1>Bienvenido a mi Task API</h1><p>Ve a <a href="/tasks">/tasks</a> para ver los datos.</p>');
});

app.listen(3000, () => console.log("Servidor operativo"));