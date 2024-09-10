const mongoose = require('mongoose');
const Employee = require('./models/employee');

// List of possible tech stacks
const TechStack = [
    "JavaScript", "Python", "Java", "Ruby", "C#", "PHP", "Go", "Swift", "Kotlin", "TypeScript"
];

// Function to get a random tech stack
const getRandomTechStack = () => {
    const randomIndex = Math.floor(Math.random() * TechStack.length);
    return TechStack[randomIndex];
};

// Dummy employee data with random tech stacks
const dummyEmployees = [
    {
        name: 'Siddhartha Srivastava',
        position: 'Full stack Developer',
        department: 'Sales',
        email: 'lodu@example.com',
        phone: '123-456-7890',
        hireDate: new Date('2021-01-01'),
        salary: 50,
        yearOfExperience: 3,
        images: ['https://randomuser.me/api/portraits/men/1.jpg'], 
        TechStack: getRandomTechStack()
    },
    {
        name: 'Jane Smith',
        position: 'Developer',
        department: 'IT',
        email: 'jane@example.com',
        phone: '098-765-4321',
        hireDate: new Date('2021-06-01'),
        salary: 60000,
        yearOfExperience: 6,
        images: ['https://randomuser.me/api/portraits/women/1.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Alice Johnson',
        position: 'Designer',
        department: 'Marketing',
        email: 'alice@example.com',
        phone: '321-654-9870',
        hireDate: new Date('2022-03-15'),
        salary: 55000,
        yearOfExperience: 4,
        images: ['https://randomuser.me/api/portraits/women/2.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Bob Brown',
        position: 'HR Specialist',
        department: 'HR',
        email: 'bob@example.com',
        phone: '654-321-0987',
        hireDate: new Date('2020-11-01'),
        salary: 45000,
        yearOfExperience: 5,
        images: ['https://randomuser.me/api/portraits/men/2.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Emily Davis',
        position: 'Accountant',
        department: 'Finance',
        email: 'emily@example.com',
        phone: '789-012-3456',
        hireDate: new Date('2019-12-01'),
        salary: 62000,
        yearOfExperience: 7,
        images: ['https://randomuser.me/api/portraits/women/3.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Michael Wilson',
        position: 'Product Manager',
        department: 'Product',
        email: 'michael@example.com',
        phone: '987-654-3210',
        hireDate: new Date('2022-08-01'),
        salary: 70000,
        yearOfExperience: 8,
        images: ['https://randomuser.me/api/portraits/men/3.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Olivia Martinez',
        position: 'Content Writer',
        department: 'Content',
        email: 'olivia@example.com',
        phone: '876-543-2109',
        hireDate: new Date('2021-05-01'),
        salary: 48000,
        yearOfExperience: 3,
        images: ['https://randomuser.me/api/portraits/women/4.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Daniel Lee',
        position: 'Business Analyst',
        department: 'Analysis',
        email: 'daniel@example.com',
        phone: '234-567-8901',
        hireDate: new Date('2023-02-15'),
        salary: 65000,
        yearOfExperience: 4,
        images: ['https://randomuser.me/api/portraits/men/4.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Sophia Taylor',
        position: 'Software Engineer',
        department: 'Engineering',
        email: 'sophia@example.com',
        phone: '345-678-9012',
        hireDate: new Date('2020-10-01'),
        salary: 70000,
        yearOfExperience: 5,
        images: ['https://randomuser.me/api/portraits/women/5.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'James Anderson',
        position: 'Marketing Coordinator',
        department: 'Marketing',
        email: 'james@example.com',
        phone: '456-789-0123',
        hireDate: new Date('2022-04-01'),
        salary: 54000,
        yearOfExperience: 3,
        images: ['https://randomuser.me/api/portraits/men/5.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Emma Walker',
        position: 'Customer Support',
        department: 'Support',
        email: 'emma@example.com',
        phone: '567-890-1234',
        hireDate: new Date('2021-07-01'),
        salary: 42000,
        yearOfExperience: 2,
        images: ['https://randomuser.me/api/portraits/women/6.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'David Harris',
        position: 'Sales Representative',
        department: 'Sales',
        email: 'david@example.com',
        phone: '678-901-2345',
        hireDate: new Date('2019-09-01'),
        salary: 48000,
        yearOfExperience: 4,
        images: ['https://randomuser.me/api/portraits/men/6.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Mia Robinson',
        position: 'Graphic Designer',
        department: 'Design',
        email: 'mia@example.com',
        phone: '789-012-3456',
        hireDate: new Date('2022-05-01'),
        salary: 52000,
        yearOfExperience: 3,
        images: ['https://randomuser.me/api/portraits/women/7.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'William Clark',
        position: 'UX Designer',
        department: 'Design',
        email: 'william@example.com',
        phone: '890-123-4567',
        hireDate: new Date('2021-11-01'),
        salary: 57000,
        yearOfExperience: 6,
        images: ['https://randomuser.me/api/portraits/men/7.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Ava Rodriguez',
        position: 'DevOps Engineer',
        department: 'Engineering',
        email: 'ava@example.com',
        phone: '901-234-5678',
        hireDate: new Date('2020-08-01'),
        salary: 75000,
        yearOfExperience: 7,
        images: ['https://randomuser.me/api/portraits/women/8.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Lucas Lewis',
        position: 'Project Manager',
        department: 'Management',
        email: 'lucas@example.com',
        phone: '012-345-6789',
        hireDate: new Date('2019-10-01'),
        salary: 80000,
        yearOfExperience: 8,
        images: ['https://randomuser.me/api/portraits/men/8.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Isabella Hall',
        position: 'SEO Specialist',
        department: 'Marketing',
        email: 'isabella@example.com',
        phone: '123-456-7890',
        hireDate: new Date('2022-01-01'),
        salary: 53000,
        yearOfExperience: 5,
        images: ['https://randomuser.me/api/portraits/women/9.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Ethan Young',
        position: 'Data Scientist',
        department: 'Data',
        email: 'ethan@example.com',
        phone: '234-567-8901',
        hireDate: new Date('2021-12-01'),
        salary: 72000,
        yearOfExperience: 6,
        images: ['https://randomuser.me/api/portraits/men/9.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Charlotte King',
        position: 'Software Tester',
        department: 'QA',
        email: 'charlotte@example.com',
        phone: '345-678-9012',
        hireDate: new Date('2020-06-01'),
        salary: 48000,
        yearOfExperience: 3,
        images: ['https://randomuser.me/api/portraits/women/10.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Alexander Wright',
        position: 'Technical Writer',
        department: 'Technical',
        email: 'alexander@example.com',
        phone: '456-789-0123',
        hireDate: new Date('2019-05-01'),
        salary: 49000,
        yearOfExperience: 4,
        images: ['https://randomuser.me/api/portraits/men/10.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Liam Scott',
        position: 'Systems Analyst',
        department: 'IT',
        email: 'liam@example.com',
        phone: '567-890-1234',
        hireDate: new Date('2022-06-01'),
        salary: 62000,
        yearOfExperience: 5,
        images: ['https://randomuser.me/api/portraits/men/11.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Zoe Turner',
        position: 'Sales Manager',
        department: 'Sales',
        email: 'zoe@example.com',
        phone: '678-901-2345',
        hireDate: new Date('2021-02-01'),
        salary: 65000,
        yearOfExperience: 6,
        images: ['https://randomuser.me/api/portraits/women/11.jpg'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Michael Brown',
        position: 'Product Manager',
        department: 'Product',
        email: 'michael.brown@example.com',
        phone: '456-789-0123',
        hireDate: new Date('2022-08-10'),
        salary: 70000,
        yearOfExperience: 5,
        images: ['https://images.unsplash.com/photo-1559192823-e1d8e87def54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
        TechStack: getRandomTechStack()
    },
    {
        name: 'Benjamin Carter',
        position: 'Business Development',
        department: 'Business',
        email: 'benjamin@example.com',
        phone: '789-012-3456',
        hireDate: new Date('2020-12-01'),
        salary: 56000,
        yearOfExperience: 4,
        images: ['https://randomuser.me/api/portraits/men/12.jpg'],
        TechStack: getRandomTechStack()
    }
];

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/collegeprj")
    .then(async () => {
        // Clear existing data
        await Employee.deleteMany({});
        
        // Insert dummy data
        await Employee.insertMany(dummyEmployees);
        console.log('Dummy data inserted successfully');
        
        // Disconnect from MongoDB
        mongoose.disconnect();
    })
    .catch(err => {
        console.error('Error inserting dummy data:', err);
        mongoose.disconnect();
    });
