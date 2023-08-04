const { Model, DataTypes } = require("sequelize");
const { UserFavorite } = require("./userFavorite.model");

const MOVIE_TABLE = 'movie';
class Movie extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: MOVIE_TABLE,
            modelName: 'Movie',
            timestamps: true,
        }
    }
}

const MovieSchema = {
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'title',
    },
    year: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'year',
    },
    imgUrl: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'img_url',
    },
    director: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'director',
    },
    actors: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'actors',
    }
}



module.exports = { Movie, MovieSchema }