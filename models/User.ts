export {};
const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/config');

class User extends Model {}

User.init({
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            min: 5,
            max: 50
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
            min: 8,
            max: 256
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 5,
            max: 50
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            min: 5,
            max: 50
        }
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = User;