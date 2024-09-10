const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { jwtSecret } = require('../config/db');

const authMiddleware = async (req, res, next) => {
  // Extract token from Authorization header
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, jwtSecret);

    // Fetch user based on decoded token
    req.user = await User.findById(decoded.userId).select('-password');
    
    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }

    next();
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid', error: error.message });
  }
};

module.exports = { authMiddleware };
