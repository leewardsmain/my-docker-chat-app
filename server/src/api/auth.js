const express = require('express');
const router = express.Router();
const authService = require('../services/auth');

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.login(email, password);
    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await authService.register(email, password);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error registering user' });
  }
});

module.exports = router;
