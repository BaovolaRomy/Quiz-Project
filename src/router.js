const { Router } = require("express");
const mainController = require("./controllers/mainController");


const router = Router();


router.get("/", mainController.renderHomePage);
router.get("/:id/questions", mainController.renderQuizPage);
router.get("/tags", mainController.tagsPage);


module.exports = router;
