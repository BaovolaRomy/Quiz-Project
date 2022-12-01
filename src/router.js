const { Router } = require("express");
const mainController = require("./controllers/mainController");
const loginController = require("./controllers/loginController");


const router = Router();


router.get("/", mainController.renderHomePage);
router.get("/:id/questions", mainController.renderQuizPage);
router.get("/tags", mainController.tagsPage);
router.get("/signup", loginController.renderSignUpPage);
router.get("/login", loginController.renderLoginPage);
router.post("/profile", loginController.toSignPage);


module.exports = router;
