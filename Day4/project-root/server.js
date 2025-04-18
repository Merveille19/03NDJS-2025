const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Import des routes
const registerRoute = require('./routes/register.route');
const loginRoute = require('./routes/login.route');

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/mon-api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Utilisation des routes
app.use('/auth/register', registerRoute);
app.use('/auth/login', loginRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});