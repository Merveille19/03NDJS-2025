// routes/login.route.js
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login.controller');

router.post('/', loginController.login);

module.exports = router;