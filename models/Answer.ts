export {};
const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');;

class Answer extends Model {}

Answer.init({
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'answer',
});

module.exports = Answer;