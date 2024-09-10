const express = require('express');
const { registerUser, authUser, getProfile } = require('../controllers/authControllers');
const { authMiddleware } = require('../middleware/authMiddleware');
const { addToBlacklist } = require('../utils/tokenBlackList')// Import addToBlacklist

const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Authenticate user and get token
router.post('/login', authUser);

// Get user profile
router.get('/profile', authMiddleware, getProfile);

router.post('/logout', authMiddleware, (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      addToBlacklist(token);
      res.status(200).json({ message: 'Logged out successfully' });
    } else {
      res.status(400).json({ message: 'No token provided' });
    }
  });

module.exports = router;
