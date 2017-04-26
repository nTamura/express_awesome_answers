'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Answers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT
      },
      QuestionId: {
        type: Sequelize.INTEGER,
        //references prop creates a fk straight to db. model prop takes a val that is the table name of that this questionID should refer to. key property refers to the column inside the questions table that questionId pounts to
        references: {
          model: 'Questions', //use the table name
          key: 'id'
        },
        onDelete: 'cascade', //if deleted, all answers will delete as well 
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Answers');
  }
};
