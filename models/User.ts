export {};
const { Sequelize, DataTypes, Model } = require('sequelize');

class User extends Model {}

User.init({
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        is: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        is: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
});

module.exports = User;