export {};
const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');

class Question extends Model {}

Question.init({
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
});

module.exports = Question;