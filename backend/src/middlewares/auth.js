const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
    //Leer el token del header
    const token = req.header('token');

    //Revisar si no hay token 
    if (!token) {
        return res.status(401).json({ msg: "No hay token, permiso no valido" });
    }
    //Validar el token

    try {
        const cifrado = jwt.verify(token, process.env.SECRETA || "SECRET_TOKEN");
        req.user = cifrado.id;
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({ msg: 'Token no válido' });
    }
}