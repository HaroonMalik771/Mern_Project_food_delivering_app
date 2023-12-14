const express = require("express");
const Pizza = require("./models/pizzamodel.js");
const app = express();
app.use(express.json());

const db = require("./db");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/mydb');

app.get("/getpizza", (req, res) => {
  const pizzaQuery = Pizza.find({});

  pizzaQuery.exec()
    .then(docs => {
      res.send(docs);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
