const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');

User.hasMany(Answer, {foreignKey: { allowNull: false }});
User.hasMany(Question, {foreignKey: { allowNull: false }});
Question.hasMany(Answer, {foreignKey: { allowNull: false }});

module.exports = { User, Question, Answer };