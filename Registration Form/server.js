const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/registration', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a User model
const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String
});

// Middleware to parse JSON
app.use(bodyParser.json());

// Serve HTML file
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    // Create a new user
    const newUser = new User({
        username,
        email,
        password
    });

    // Save the user to the database
    await newUser.save();

    res.send('Registration successful!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
