const { models } = require('../providers/sequelize/dbConnection');

exports.findOne = async (id) => {
    const res = await models.Movie.findByPk(id);
    return res;
}

exports.create = async(movie) => {
    const res = await models.Movie.create(movie);
    return res;
}

