const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Valider les données (à faire plus tard)

    // 2. Vérifier si l'utilisateur existe déjà (à faire plus tard)

    // 3. Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // 4. Créer un nouvel utilisateur
    const newUser = new User({
      email,
      password: hashedPassword,
    });

    // 5. Sauvegarder l'utilisateur dans la base de données
    await newUser.save();

    // 6. Retourner la réponse
    const userWithoutPassword = { ...newUser.toObject() };
    delete userWithoutPassword.password;

    return res.status(201).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  register,
};