const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("We are at home");
});

app.get("/posts", (req, res) => {
  res.send("We are at posts!");
});

//CONNECT TO DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

//LISTENING TO SERVER
app.listen(3000);
