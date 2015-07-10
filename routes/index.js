var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

var quizAuthor = require('../creditos/quiz_creditos');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', quizAuthor.author);

module.exports = router;
