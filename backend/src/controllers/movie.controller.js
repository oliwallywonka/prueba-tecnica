const movieService = require('../services/movie.service');
const { userNotFoundError } = require('../errors/auth.error');
exports.addFavorite = async (req, res) => {
    const { userId, movie } = req.body;
    if (!userId) return res.status(400).json({ message: "el userId es requrido" });
    if (!movie) return res.status(400).json({ message: "los datos de la pelicula son requeridas" });

    try {
        const result = await movieService.addFavorite({userId: Number(userId), movie});
        return res.status(201).json(result);
    } catch (e) {
        if (e instanceof userNotFoundError) return res.status(404).json({ message: "usuario no encontrado " });
        return res.status(500).json({ message: "Error server" });
    }
}