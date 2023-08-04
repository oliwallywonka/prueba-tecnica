const { userNotFoundError } = require("../errors/auth.error");
const movieRepository = require("../repositories/movie.repository");
const userRepository = require("../repositories/user.repository");
const favoriteRespository = require("../repositories/favorite.respository");

exports.addFavorite = async ({userId, movie}) => {
  try {
    const userFound = await userRepository.findById(userId);
    if (!userFound) throw new userNotFoundError();
    const movieFound = await movieRepository.findOne(movie.id);
    if (movieFound) {
      await favoriteRespository.create({
        movieId: movie.id,
        userId
      });
      return { message: "success" };
    }
    await movieRepository.create(movie);
    await favoriteRespository.create({
      movieId: movie.id,
      userId
    });
    return { message: "success" };
  } catch (e) {
    console.log(e);
    throw e;
  }
}