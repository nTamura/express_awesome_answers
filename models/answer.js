'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answer = sequelize.define('Answer', {
    content: DataTypes.TEXT,
    QuestionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Answer.belongsTo(models.Question);
        // Answer#setQuestion
        // Answer#getQuestion

        // Answer.findById(1)
        //  .then(function (answer){return answer.getQuestion() })
        //  .then(console.info)  logs the question answer belongs to 
      }
    }
  });
  return Answer;
};
