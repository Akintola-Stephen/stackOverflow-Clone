const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./helpers/database/connectionDatabase.js");
const app = express();

// Dotenv package configuration. The dotenv package gives us access to the .env file.
dotenv.config();

// Database Connect
connectDatabase();

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Stack Overflow Clone Initial Test phase");
});
