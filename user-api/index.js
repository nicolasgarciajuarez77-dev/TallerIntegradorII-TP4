require('dotenv').config();
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 4646;

// Base de datos ficticia de usuarios (Reto Apartado 7)
const usuarios = [
    { id: 1, nombre: 'Ana', email: 'ana@example.com' },
    { id: 2, nombre: 'Carlos', email: 'carlos@example.com' },
    { id: 3, nombre: 'Lucía', email: 'lucia@example.com' }
];

// 1. Ruta principal (Sigue sirviendo el HTML)
app.get('/', (req, res) => {
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error interno: Archivo no encontrado');
        }
        res.send(data);
    });
});

// 2. Ruta API para devolver usuarios en formato JSON (Reto Apartado 7)
app.get('/api/usuarios', (req, res) => {
    res.json(usuarios);
});

// 3. Middleware de Error 404 para la API (Devuelve JSON)
app.use('/api', (req, res) => {
    res.status(404).json({
        error: 404,
        mensaje: 'Recurso de la API no encontrado'
    });
});

// 4. Middleware de Error 404 general para la web (Devuelve HTML)
app.use((req, res) => {
    res.status(404).send('<h1>404 - Página no encontrada</h1><p>La ruta ingresada no existe.</p>');
});

// 5. Inicio del servidor
app.listen(PORT, () => {
    console.log(`Servidor activo en el puerto ${PORT} -> http://localhost:${PORT}`);
});