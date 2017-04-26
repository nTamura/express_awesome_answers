const express = require('express');
const router = express.Router();

// const Question = require('../models/index').Question;
// below is destructured of above version
const {Question} = require('../models/index')

// below would be Questions#index URL /questions action:GET
router.get('/', function ( req, res, next) {
  Question
    .findAll({order: [['createdAt', 'DESC']]})
    .then(function(questions){
      // the path of template that response.render takes is relative to the view folder by default
      res.render('questions/index', {questions: questions});
    })
  // response.send('stuff');
})

// questions#new  url /questions/new GET
router.get('/new', function (req, res) {
  const question = Question.build();
  res.render('questions/new', {question: question})
})

router.post('/', function(req, res){
  // .body is a property of the request obj that contains all form data as js obj
  // res.send(req.body);
  // const questionParams = {}; //grabbing a the params into hash from below
  // questionParams.title = req.body.title;
  // questionParams.description = req.body.description;
// or if you destructure the top code,
  const {title, description} = req.body

  Question
    .create({title: title, description: description})
    .then(function(question){
      res.redirect('/questions');
    })
})

// questions#show for a url questions/99 the req.params obj will be equal to {id:99}
router.get('/:id', function (req, res){
  const id = req.params.id;

  Question
  .findById(id)
  .then(function(question){
    res.render('questions/show', {question: question})
  })
})
// whatever we put after the colon gets passed as params
// if /:id, /questions/:id action:GET

module.exports = router;
