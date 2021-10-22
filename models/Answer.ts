export {};
const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/config');

class Answer extends Model {}

Answer.init({
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = Answer;