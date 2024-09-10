// routes/employees.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/employee');
const path = require('path');
const fs = require('fs');

// Get all employees
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get employee by ID
router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ message: 'Employee not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new employee
router.post('/', async (req, res) => {
    try {
        const { name, position, department, email, phone, hireDate, salary, yearOfExperience, techStack } = req.body;
        
        // Handle images if provided
        let images = [];
        if (req.files && req.files.images) {
            const files = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
            
            files.forEach(file => {
                const uploadPath = path.join(__dirname, '..', 'uploads', file.name);
                file.mv(uploadPath, (err) => {
                    if (err) return res.status(500).json({ message: "File upload failed", error: err });
                });
                images.push(`/uploads/${file.name}`); // Store the file path
            });
        }

        // Create the new employee record
        const newEmployee = new Employee({
            name,
            position,
            department,
            email,
            phone,
            hireDate,
            salary,
            yearOfExperience,
            images,
            TechStack
        });

        // Save to the database
        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add employee', error: err.message });
    }
});


// Update an employee by ID (PUT request)
router.put('/:id', async (req, res) => {
    try {
        const { name, position, department, email, phone, hireDate, salary, yearOfExperience, TechStack } = req.body;
        
        // Find the employee by ID
        let employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Update employee data
        employee.name = name || employee.name;
        employee.position = position || employee.position;
        employee.department = department || employee.department;
        employee.email = email || employee.email;
        employee.phone = phone || employee.phone;
        employee.hireDate = hireDate || employee.hireDate;
        employee.salary = salary || employee.salary;
        employee.yearOfExperience = yearOfExperience || employee.yearOfExperience;
        employee.TechStack = TechStack || employee.TechStack;

        // Handle image upload (optional)
        if (req.files && req.files.images) {
            const file = req.files.images;
            const uploadPath = path.join(__dirname, '..', 'uploads', file.name);
            file.mv(uploadPath, (err) => {
                if (err) return res.status(500).json({ message: "File upload failed", error: err });
            });
            employee.images = [`/uploads/${file.name}`]; // Overwrite existing images
        }

        // Save the updated employee to the database
        await employee.save();
        res.status(200).json({ message: 'Employee updated', employee });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update employee', error: err.message });
    }
});



// Delete an employee by ID (DELETE request)
router.delete('/:id', async (req, res) => {
    try {
        // Find and delete the employee by ID
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }

        // Optionally, you can also delete associated images from the server
        // if you want to clean up the image files from the uploads directory
        if (employee.images.length > 0) {
            employee.images.forEach(image => {
                const imagePath = path.join(__dirname, '..', image);
                fs.unlink(imagePath, (err) => {
                    if (err) console.error(`Failed to delete image: ${imagePath}`, err);
                });
            });
        }

        res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete employee', error: err.message });
    }
});


module.exports = router;
