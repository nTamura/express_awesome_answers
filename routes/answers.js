const express = require('express');
// the express.Router() method optionally takes obj to config it.
// mergeParams option will combine the req.params from the parent router with teh actual routers req.params when set to true
const router = express.Router({mergeParams: true});

const Models = require('../models/index');
const Question = Models.Question;
const Answer = Models.Answer

// answers#create url: /questions/:questionId/answers POST
router.post('/', function(req, res){
  // res.send(Object.assign({}, req.body, req.params))
  const questionId = req.params.questionId;

  Answer
    .create({content: req.body.content, QuestionId: questionId})
    .then(function () { res.redirect(`/questions/${questionId}`)});
})

module.exports = router;
