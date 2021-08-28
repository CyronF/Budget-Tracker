const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
const router = require("./routes/api.js")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb+srv://herokuApps:password36@cluster0.w57kd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});