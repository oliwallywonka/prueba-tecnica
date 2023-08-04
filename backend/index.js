const express = require('express');
const cors = require('cors');
const sequelize = require('./src/providers/sequelize/dbConnection');
const { sqlite } = require('./src/providers/sqlite');
const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

sqlite;

 async function seed ()  {
    const userLenght = await sequelize.models.User.count();
    if (userLenght === 0) {
        return await sequelize.models.User.create({
            nombres: "Alex",
            primerApellido: "Chura",
            segundoApellido: "Cussi",
            usuario: "alex",
            password: "123",
        })
    }
}
seed();

//RUTAS
app.use('/api/auth', require('./src/routes/auth.route.js'))
app.use('/api/movie', require('./src/routes/movie.route.js'))

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});



