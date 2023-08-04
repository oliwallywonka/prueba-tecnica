const sqlite = require('sqlite3');

exports.sqlite = new sqlite.Database('prueba', err => {
    if (err) {
        return console.log('ERROR DATABASE CONNECTION');
    } else {
        console.log("CONEXION EXITOSA A DB")
    }
});