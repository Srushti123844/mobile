const express = require('express');
const app = express();

app.use(express.json());

let products = []; // In-memory storage for demo purposes

// Add a new product
app.post('/products', (req, res) => {
  const { name, price, description } = req.body;
  if (!name || !price) {
    return res.status(400).json({ error: 'Name and price are required.' });
  }
  const product = { id: products.length + 1, name, price, description };
  products.push(product);
  res.status(201).json(product);
});

// Get all products
app.get('/products', (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});