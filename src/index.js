const express = require("express");
let movies = require("./database.json");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", function (request, response) {
  response.send("This is the main page of my API");
});

app.get("/movies", function (req, res) {
  res.json(movies);
});

app.listen(3000);
