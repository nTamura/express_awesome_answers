'use strict';
const M = require('../models/index');
const Question = M.Question;
const faker = require('faker');

// array.from can create arrays in a variety of different ways using it as follows will create an array with 100 undefined elements
const questions = Array
.from({length:100})
.map(function() {
  return Question.create({
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}?`,
    description: faker.hacker.phrase()
  }).catch(function (error) {console.log('Duplicate title')})
}) //use catch to prevent query from crashing our program when the title is not unique

module.exports = {
  up: function (queryInterface, Sequelize) {
    // the up and down methods need to return a promise otherwise the command sequelize db:seed:all will not work.
    // all sequelize model methods return promises
    // return Question.create({
    //   title: 'Poop', description: 'something stuff here'
    // });
    return Promise.all(questions)
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Questions', null, {});
    // queryInterface is an obj that has methods to directly query our db skipping models
  }
};
