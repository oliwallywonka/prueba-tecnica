const { Movie } = require('../models/movie.model');
const { UserFavorite } = require('../models/userFavorite.model');
const { models } = require('../providers/sequelize/dbConnection');

exports.findOne = async (usuario) => {
  const res = await models.User.findOne({
    where: {
      usuario,
    },
  });
  return res;
}

exports.findDetails = async (userId) => {
  const res = await models.User.findOne({
    where: {
      id: userId
    },
    attributes: {
      exclude: ['password']
    },
    include: [
      {
        model: UserFavorite,
        as: 'favorites',
        include: [
          {
            model: Movie,
            as: 'movie',
          }
        ]
      }
    ],
    
  });
  return res;
}

exports.findById = async (userId) => {
  const res = await models.User.findByPk(userId);
  return res;
}

exports.create = async (data) => {
  const res = await models.User.create(data);
  return res;
}