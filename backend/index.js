// server.js
const express = require('express');
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employees');
const cors = require('cors');
const fileUpload = require('express-fileupload'); // Import file upload middleware
const path = require('path');
const authRoutes = require('./routes/authRoutes')

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Specify the frontend origin you want to allow
}));
app.use(fileUpload()); // Enable file upload support

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

mongoose.connect("mongodb://127.0.0.1:27017/collegeprj")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/api/employees', employeeRoutes);
app.use('/api/auth/' , authRoutes)

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
