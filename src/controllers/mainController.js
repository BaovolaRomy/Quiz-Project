const {Quiz, Tag, Question, Answer, Level} = require('../models/index.js');

const mainController = {

  renderHomePage: async(request, response) => {

    const quizList = await Quiz.findAll( {
      include: ["author", "tags"]
    });
    console.log(quizList);
    response.render('home', {quizList});
  },

  renderQuizPage: async(req, res) =>{
    const id = req.params.id;
    const quizzList = await Question.findByPk(id, {
      include: [ "level", "good_answer"
      {
        association: "quiz",
        include: ["author", "tags"],
      }, 
     ]
    });
    res.render('quiz', {quizzList});
  }
}
module.exports = mainController;