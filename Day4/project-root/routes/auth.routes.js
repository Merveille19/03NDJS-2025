// routes/auth.routes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// Route pour l'inscription
router.post('/register', authController.register);

// Route pour la connexion
router.post('/login', (req, res) => {
  res.send('Login route');
});

module.exports = router;