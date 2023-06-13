const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Create Express app
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a MongoDB model for your data (e.g., User)
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  role: String,
}));

// Middleware to check token in headers
const checkTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  // Check if token is present and valid
  if (token === process.env.ADMIN_TOKEN) {
    req.userRole = 'admin';
    next();
  } else if (token === process.env.USER_TOKEN) {
    req.userRole = 'user';
    next();
  } else {
    res.status(401).send('Invalid token');
  }
};

// Middleware to restrict access to admin only
const adminOnlyMiddleware = (req, res, next) => {
  if (req.userRole === 'admin') {
    next();
  } else {
    res.status(403).send('Invalid request');
  }
};

// Routes
app.get('/data', checkTokenMiddleware, (req, res) => {
  if (req.userRole === 'admin') {
    // Fetch all data from MongoDB (e.g., User.find({}))
    // Return the data as a response
    User.find({}, (err, data) => {
      if (err) {
        res.status(500).send('Internal Server Error');
      } else {
        res.json(data);
      }
    });
  } else {
    res.status(403).send('Invalid request');
  }
});

app.post('/data', checkTokenMiddleware, adminOnlyMiddleware, (req, res) => {
  if (req.userRole === 'admin') {
    // Create new data in MongoDB based on request body
    const newData = new User({
      name: req.body.name,
      role: req.body.role,
      // Add more properties as needed
    });

    // Save the data
    newData.save((err) => {
      if (err) {
        res.status(500).send('Error saving data');
      } else {
        res.send('Data added successfully');
      }
    });
  } else {
    res.status(403).send('Invalid request');
  }
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
