const { Movie, MovieSchema } = require('./movie.model');
const { User, UserSchema } = require('./user.model');
const { UserFavorite, UserFavoriteSchema } = require('./userFavorite.model');

function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Movie.init(MovieSchema, Movie.config(sequelize));
    UserFavorite.init(UserFavoriteSchema, UserFavorite.config(sequelize));
    User.hasMany(UserFavorite, {
        foreignKey: 'user_id',
        as: 'favorites',
    })
    Movie.hasMany(UserFavorite, {
        foreignKey: 'movie_id',
        as: 'users'
    })
    UserFavorite.belongsTo(User, {
        foreignKey: 'user_id',
        as: 'user',
    })
    UserFavorite.belongsTo(Movie, {
        foreignKey: 'movie_id',
        as: 'movie',
    })


}
module.exports = setupModels;