const { Model, DataTypes } = require('sequelize');
const { UserFavorite } = require('./userFavorite.model')

const USER_TABLE = 'user';
class User extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: true,
        }
    }
}

const UserSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    nombres: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'nombres',
    },
    primerApellido: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'primer_apellido',
    },
    segundoApellido: {
        allowNull: true,
        type: DataTypes.STRING,
        field: 'segundo_apellido',
    },
    usuario: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'usuario',
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'password',
    },
}


module.exports = { User, UserSchema }