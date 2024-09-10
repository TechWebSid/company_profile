// models/Employee.js
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    name: String,
    position: String,
    department: String,
    email: String,
    phone: String,
    hireDate: Date,
    salary: Number,
    yearOfExperience: Number,
    images: [String],
    TechStack: String,
});

module.exports = mongoose.model('Employee', EmployeeSchema);
