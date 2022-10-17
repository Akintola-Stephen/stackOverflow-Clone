// Main Routers

// Router files.
const auth = require("./auth.js");
const questions = require("./questions.js");
const user = require("./user.js");

/* Express router. */
const express = require("express");
const router = express.Router();

// api/auth
router.use("/auth", auth);

// api/questions
router.use("/questions", questions);

// /api/users
router.use("/users", user);

module.exports = router;
