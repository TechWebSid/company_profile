const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is configured properly

// MongoDB Connection Function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

// Export connectDB and jwtSecret
module.exports = {
  connectDB,
  jwtSecret: process.env.JWT_SECRET || 'your_fallback_jwt_secret_key',
};
