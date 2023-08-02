const { createConnection } = require('typeorm');

const connectDB = async () => {
    createConnection()
        .then(async (connection) => {
            console.log('Conexión typeorm SQLite establecida.');

        })
        .catch((error) => console.log('Error al conectar a la base de datos:', error));
}

module.exports = connectDB;