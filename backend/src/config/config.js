require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbName: process.env.DB_NAME
}

module.exports = { config };