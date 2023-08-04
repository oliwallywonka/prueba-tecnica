const { userNotFoundError, validationAuthError } = require('../errors/auth.error');
const { authService, getUserDetails } = require('../services/auth.service');


exports.authUser = async (req, res) => {
    const { usuario, password } = req.body;
    if (!usuario) return res.status(400).json({ message: "el usuario es requrido" })
    if (!password) return res.status(400).json({ message: "el password es requrido" })
    try {
        const userFound = await authService(usuario);
        return res.json(userFound);
    } catch (e) {
        if (e instanceof userNotFoundError) return res.status(404).json({ message: "usuario no encontrado " });
        if (e instanceof validationAuthError) return res.status(400).json({ message: "usuario o contraseña no validas" });
        return res.status(500).json({ message: "Error server" });
    }
}

exports.getUser = async (req, res) => {
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ message: "el userId es requrido" });
    try {
        const user = await getUserDetails(Number(userId));
        return res.status(200).json(user);
    } catch (e) {
        console.log(e)
        if (e instanceof userNotFoundError) return res.status(404).json({ message: "usuario no encontrado " });
        return res.status(500).json({ message: "Error server "});
    }
}