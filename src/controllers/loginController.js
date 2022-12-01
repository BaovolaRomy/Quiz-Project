const {Quiz, Tag, Question, Answer, Level, User} = require('../models/index.js');

const loginController = {

    renderSignUpPage: async (req, res) => {
        res.render('signup');
    },

    renderLoginPage: async (req, res) => {
        res.render('login');
    },

    toSignPage: async (req, res) => {

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const confirmation = req.body.confirmation;


    const newUser = await User.create({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password
    })
    
    res.render('profile', {newUser});
    }
}

module.exports = loginController;