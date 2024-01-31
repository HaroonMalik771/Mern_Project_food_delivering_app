
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calculator = () => {
  const [operand1, setOperand1] = useState('');
  const [operation, setOperation] = useState('+');
  const [operand2, setOperand2] = useState('');
  const [result, setResult] = useState(null);

  useEffect(() => {

    const storedResult = getStoredResultFromCookies();
    if (storedResult) {
      setResult(storedResult);
    }
  }, []);

  const handleCalculate = () => {
    const num1 = parseFloat(operand1);
    const num2 = parseFloat(operand2);

    if (isNaN(num1) || isNaN(num2)) {
      setResult('Invalid input');
      return;
    }

    switch (operation) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        if (num2 === 0) {
          setResult('Cannot divide by zero');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Invalid operation');
        break;
    }


    sendResultToServer({ operand1, operand2, operation, result });
  };

  const sendResultToServer = async (data) => {
    try {
      const response = await axios.post('http://localhost:8000/api/calculate', data);

      console.log('Server response:', response.data);

    } catch (error) {
      console.error('Error sending data to server:', error);
    }
  };


  const getStoredResultFromCookies = () => {


    const storedResult = getCookie('result');
    return storedResult ? JSON.parse(storedResult) : null;
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  return (
    <div>
      <h2>Calculator</h2>
      <div>       <label>Operand 1:</label>
        <input type="text" value={operand1} onChange={(e) => setOperand1(e.target.value)} />
      </div>
      <div>
        <label>Operation:</label>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <label>Operand 2:</label>
        <input type="text" value={operand2} onChange={(e) => setOperand2(e.target.value)} />
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {result !== null && (
        <div>
          <h3>Result:</h3>
          <p>{result}</p>
        </div>
      )}
      <div>
        <button onClick={() => sendResultToServer({ operand1, operand2, operation, result })}>Send Data</button>


      </div>
    </div>
  );
};


export default Calculator;









