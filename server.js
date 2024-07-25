const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.use(express.json());

app.post('/calculate', (req, res) => {
  const { operation, num1, num2 } = req.body;
  let result;
  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      res.status(400).send('Invalid operation');
      return;
  }
  res.send(`The result of ${operation}ing ${num1} and ${num2} is ${result}`);
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

