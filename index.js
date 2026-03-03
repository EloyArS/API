const express = require('express');
const app = express();
// Importas las rutas con tu nueva constante
const TaskRoutes = require('./routes/routes'); 

app.use(express.json());
app.use('/tasks', TaskRoutes); // Usas la constante aquí

app.listen(3000, () => console.log("🚀 Servidor listo"));