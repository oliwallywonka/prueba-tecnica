const express = require('express');
const dbConnection = require('./src/providers/typeorm/dbConnection')
const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

const sqlite = require('sqlite3');

const db = new sqlite.Database('prueba', err => {
    if (err) {
        return console.log('ERROR DATABASE CONNECTION');
    } else {
        console.log("CONEXION EXITOSA A DB")
    }
});

dbConnection();


//RUTAS
app.use('/api/auth', require('./src/routes/auth.route.js'))

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



