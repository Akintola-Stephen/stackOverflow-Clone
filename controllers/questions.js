// Question Controllers

const Question = require("../models/Question.js"); // Question model import
const asyncErrorWrapper = require("express-async-handler"); // Express-async-handler import

let isCached = false;

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

/* Get All Questions. This controller returns all questions. */
const getAllQuestions = asyncErrorWrapper(async (req, res, next) => {
  /* The "question" image finds and returns all the questions from the database. */
  const questions = await Question.find();

  /* JSON information */
  return res.status(200).json({
    success: true,
    data: questions,
  });
});

/* Delete Question */
const deleteQuestion = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;

  await Question.findOneAndDelete(id);

  /* JSON information */
  res.status(200).json({
    success: true,
    message: "Your Question was deleted.",
  });
});

module.exports = {
  askNewQuestion,
  editQuestion,
  deleteQuestion,
  getAllQuestions,
};
