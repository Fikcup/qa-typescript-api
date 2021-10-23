export {};
const { DataTypes, Model } = require('sequelize');

const sequelize = require('../config/connection');;

class Answer extends Model {}

Answer.init(
    {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
        voteCount: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        },
        chosenAnswer: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'answer',
    }
);

module.exports = Answer;