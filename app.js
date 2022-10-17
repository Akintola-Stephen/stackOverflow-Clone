const express = require("express");
const app = express();

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});

app.get("/", function (req, res) {
  res.send("Stack Overflow Clone Initial Test phase");
});
