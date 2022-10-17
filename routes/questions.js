// Questions Routers

// Controller functions and middlewares.
const {
  askNewQuestion,
  getAllQuestions,
  editQuestion,
  deleteQuestion,
} = require("../controllers/questions.js");
const {
  getAccessToRoute,
  getQuestionOwnerAccess,
} = require("../middlewares/authorization/auth.js");
const {
  checkQuestionExist,
} = require("../middlewares/database/databaseHelpers.js");
const answer = require("./answer.js");

/* Express router. */
const express = require("express");
const router = express.Router();

/*
api/questions/
When a request is made to this route, the "getAllQuestions" controller runs, which finds and returns all the questions from the database.
*/
router.get("/", getAllQuestions);

/*
api/questions/ask
When a request is made to this route, the "getAccessToRotue" middleware runs, which first checks if the user is logged in. 
If the user is logged in, the "askNewQuestion" controller will run, allowing the user to ask questions.
*/
router.post("/ask", getAccessToRoute, askNewQuestion); // Önce token decoded middleware' çalışır, ardından soru ekleme controlleri çalışır.

/*
api/questions/:id/edit
When a request is made to this route, the "getAccessToRotue" middleware runs, which first checks if the user is logged in. 
Then the "checkQuestionExist" middleware runs, which queries the database based on the question id sent first.
Then the "getQuestionOwnerAccess" middleware runs, which checks if the user is the real owner of the question so that he can edit it.
If the user is the real owner of the question, the "editQuestion" controller works.
*/
router.put(
  "/:id/edit",
  [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess],
  editQuestion
);

/*
api/questions/:id/delete
When a request is made to this route, the "getAccessToRotue" middleware runs, which first checks if the user is logged in. 
Then the "checkQuestionExist" middleware runs, which queries the database based on the question id sent first.
Then the "getQuestionOwnerAccess" middleware runs, which checks if the user is the real owner of the question so that he can edit it.
If the user is the real owner of the question, the "deleteQuestion" controller works.
*/
router.delete(
  "/:id/delete",
  [getAccessToRoute, checkQuestionExist, getQuestionOwnerAccess],
  deleteQuestion
);

module.exports = router;
