const { models } = require('../providers/sequelize/dbConnection');

exports.create = async (favorite) => {
    const res = await models.UserFavorite.create(favorite);
    return res;
}