const express = require("express");
const cors = require('cors');
const Pizza = require("./models/pizzamodel.js");
const user = require("./models/usermodel.js");
const session = require('express-session');
const calculatorRoutes= require("./models/calculatormodel.js")

const app = express();
app.use(cors({
  origin: 'http://localhost:3000'
}));


// Middleware for JSON parsing
app.use(express.json());

// Session setup
app.use(session({
  secret: 'a1b2c3d4e5f6g7h8i9j0!@#$%^&*()', // replace with a secure secret key
  resave: false,
  saveUninitialized: false,
}));


app.post('/api/calculate', (req, res) => {
  const { operand1, operand2, operation, result } = req.body;

  
  console.log('Received data:', { operand1, operand2, operation, result });

 
  res.json({ success: true, message: 'Data received successfully' });

});

app.use('/calculator', calculatorRoutes);
 
const pizzaRoutes = require("./routes/pizzaRoute.js");
const userRoutes = require("./routes/userRoute.js");

// other imports and middleware...


app.use("/api/pizzas", pizzaRoutes);
app.use("/api/users", userRoutes);





const db = require("./db");
const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/mydb');


app.get("/", (req, res) => {
  res.send("Server is ready");
});



app.listen(8000, () => {
  console.log('Server listening on port 8000');
});

















// app.get("/getpizza", (req, res) => {
//   const pizzaQuery = Pizza.find({});

//   pizzaQuery.exec()
//     .then(docs => {
//       res.send(docs);
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send("Internal Server Error");
//     });
// });