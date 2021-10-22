export {};
const { Sequelize, DataTypes, Model } = require('sequelize');

class Answer extends Model {}

Answer.init({
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
});

module.exports = Answer;