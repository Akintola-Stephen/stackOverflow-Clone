// Questions Routers

// Controller functions and middlewares.
const {
  askNewQuestion,
  editQuestion,
  deleteQuestion,
  getAllQuestions,
} = require("../controllers/questions.js");

/* Express router. */
const express = require("express");
const router = express.Router();

router.get("/", getAllQuestions);

router.post("/ask", askNewQuestion);

router.put("/:id/edit", editQuestion);

router.delete("/:id/delete", deleteQuestion);

module.exports = router;
