const { models } = require('../providers/sequelize/dbConnection');

exports.create = async (favorite) => {
    const res = await models.UserFavorite.create({
        user_id: favorite.userId,
        movie_id: favorite.movieId
    });
    return res;
}