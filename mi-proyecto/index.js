const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Ruta principal para servir el index.html
app.get('/', (req, res) => {
    // Leemos el archivo usando el Core Module 'fs'
    fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
            // Manejo de error si el archivo no existe
            return res.status(500).send('Error interno: Archivo no encontrado');
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Servidor activo en http://localhost:${PORT}`);
});