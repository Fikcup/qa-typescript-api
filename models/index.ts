const User = require('./User');
const Question = require('./Question');
const Answer = require('./Answer');

User.hasMany(Answer);
User.hasMany(Question);
Question.hasMany(Answer);

module.exports = { User, Question, Answer };