export {};
const { Sequelize, DataTypes, Model } = require('sequelize');

class Question extends Model {}

Question.init({
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'question',
});

module.exports = Question;