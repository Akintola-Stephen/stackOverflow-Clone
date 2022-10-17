/* Database Connect */
const mongoose = require("mongoose");
require("dotenv");

const connectDatabase = () => {
  /* Connection to the database occurs with "mongoose.connect()". Give the database connection link as a parameter. */
  mongoose
    .connect(process.env.MONGO_URL, { useNewUrlParser: true })
    /* If the connection to the database is made, the callback functions will work. */
    .then(() => {
      console.log("Connection to database established");
    })
    .catch((err) => {
      console.log(err);
    });
};

// mongodb+srv://stephen:23killers@sandbox.zyw4n.mongodb.net/?retryWrites=true&w=majority

module.exports = connectDatabase;