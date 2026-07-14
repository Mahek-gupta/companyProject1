const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-Memory Database Arrays
const users = [];
let cart = [];

// 1. Register API
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const userExists = users.find(u => u.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'Email already registered' });
  }
  users.push({ name, email, password });
  res.status(201).json({ message: 'Success' });
});

// 2. Login API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }
  res.status(200).json({ message: 'Welcome' });
});

// 3. Add to Cart API
app.post('/api/cart', (req, res) => {
  const { productId, name, price, image } = req.body;
  cart.push({ productId, name, price, image });
  res.status(200).json({ message: 'Added', cart });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend Active on Port ${PORT}`));