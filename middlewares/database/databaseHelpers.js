// Middlewares

const User = require("../../models/User.js");
const Question = require("../../models/Question.js");
const CustomError = require("../../helpers/error/CustomError.js");
const asyncErrorWrapper = require("express-async-handler");

/* This middleware queries the user entity based on the user id sent as a parameter. If the user does not exist, an error message is returned. 
If the user exists, it allows the transition with next(). */
const checkUserExist = asyncErrorWrapper(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return next(new CustomError("There is no such user with that id."));
  }

  next();
});

/* This middleware queries the question entity based on the user id sent as a parameter. If the question does not exist, an error message is returned. 
If the question exists, it allows the transition with next(). */
const checkQuestionExist = asyncErrorWrapper(async (req, res, next) => {
  const question_id = req.params.id || req.params.question_id;
  const question = await Question.findById(question_id);

  if (!question) {
    return next(new CustomError("There is no such question with that id."));
  }

  next();
});

module.exports = {
  checkUserExist,
  checkQuestionExist,
};
