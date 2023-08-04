const { Model, DataTypes } = require('sequelize');
const { Movie } = require('./movie.model');
const { User } = require('./user.model');

const USER_FAVORITE_TABLE = 'user_favorite';
class UserFavorite extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_FAVORITE_TABLE,
            modelName: 'UserFavorite',
            timestamps: true,
        }
    }
}

exports.UserFavoriteSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'user_id',
    },
    movieId: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'movie_id',
    },
}



module.exports = { UserFavorite }