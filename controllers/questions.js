// Question Controllers

const Question = require("../models/Question.js"); // Question model import
const asyncErrorWrapper = require("express-async-handler"); // Express-async-handler import

/* Ask New Question This controller creates a new question. */
const askNewQuestion = asyncErrorWrapper(async (req, res, next) => {
  /* Question information is taken from "req.body". */
  const information = req.body;

  /* This is where the question creation process takes place. */
  const question = await Question.create({
    /* "information" information with spread operator. */
    ...information,

    /* The information of the user who created the question is taken from "req.user.id" */
    user: req.user.id,
  });

  /* JSON information */
  res.status(200).json({
    success: true,
    data: question,
  });
});

/* Edit Question */
const editQuestion = asyncErrorWrapper(async (req, res, next) => {
  // Id parameter
  const { id } = req.params;
  const { title, content } = req.body;

  // Retrieve all questions
  let question = await Question.findById(id);

  question.title = title;
  question.content = content;

  question = await question.save();

  /* JSON information */
  return res.status(200).json({
    success: true,
    data: question,
  });
});

module.exports = {
  askNewQuestion,
  editQuestion,
};
