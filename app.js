// Server.js is the entry point in this project.

const express = require("express");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const redis = require("redis");
const path = require("path");
const routers = require("./routes/index.js");
const connectDatabase = require("./helpers/database/connectionDatabase.js");
const customErrorHandler = require("./middlewares/errors/customErrorHandler.js");

// Dotenv package configuration. The dotenv package gives us access to the .env file.
dotenv.config();

// Database Connect

// Port
const PORT = 3000 || process.env.PORT;

//The app variable uses the Express package.
const app = express();

// connectDatabase();

// "localhost:PORT/" endpoint
app.get("/", (req, res) => {
  res.send("Stackoverflow back end clone with Node.js.");
});

// Middlewares
app.use(helmet());
app.use(express.json()); // Express.js JSON parser middleware for "req.body" requests.
app.use(customErrorHandler); // Express.js custom error handler middleware.
app.use("/api", routers); // Route configuration.

// This function connects the server to a PORT.
app.listen(PORT, () => {
  connectDatabase();
  // console.log(`Server is running on localhost:${PORT}`);
});
