const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const blogRoute = require("./routes/blogRoute")

app.use(express.json());
app.use("/blogs",blogRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running");
    });
  })
  .catch((error) => {
    console.log(error);
  });
