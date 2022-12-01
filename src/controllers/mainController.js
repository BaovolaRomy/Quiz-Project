const {Quiz, Tag, Question, Answer, Level} = require('../models/index.js');

const mainController = {

  renderHomePage: async(request, response) => {

    const quizList = await Quiz.findAll( {
      include: ["author", "tags"]
    });
    console.log(quizList);
    response.render('home', {quizList});
  },

  renderQuizPage: async (req, res) =>{
    try{
    const id = req.params.id;
    const questionsList = await Quiz.findByPk(id,{
      include: [
        { association: "tags" },
        { association: "author" },
        { association: "questions",
          include: ["propositions", "level", "good_answer"] }     
    ]
    });
      res.render('quiz', {questionsList});
    }
    
    catch(error){
      res.status(500).send(`An error occured with the database :\n${error.message}`);
    }

  }
}
module.exports = mainController;