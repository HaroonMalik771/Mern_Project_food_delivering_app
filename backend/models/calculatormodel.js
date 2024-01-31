// backend/models/CalculatorModel.js
const mongoose = require('mongoose');

const calculatorSchema = new mongoose.Schema({
  operand1: { type: Number, required: true },
  operand2: { type: Number, required: true },
  operation: { type: String, required: true },
  result: { type: Number, required: true }
});

const Calculator = mongoose.model('calcultor', calculatorSchema);
module.exports = Calculator;

