const { Sequelize } = require('sequelize');
const setupModels = require('../../models');

const sequelize = new Sequelize(
    {
        dialect: 'sqlite',
        storage: './prueba',
    }
)

sequelize.sync();

setupModels(sequelize);

module.exports = sequelize;
