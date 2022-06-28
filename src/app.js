const express = require("express");
const app = express();
const path = require("path");

//set static folder
app.use(express.static(path.resolve("public")));

//routes
app.get("/", (req, res) => {
  res.sendFile(path.resolve("public", "index.html"));
});

module.exports = app;
