const express = require('express');
const { isEquationBalanced } = require('chem-equilibrium');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/check-equation', (req, res) => {
  const { equation } = req.body;

  if (!equation) {
    return res.status(400).json({ error: 'Equation is required' });
  }

  const balanced = isEquationBalanced(equation);

  res.json({ equation, balanced });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
