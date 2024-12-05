// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection setup
mongoose.connect('mongodb://localhost:27017/libraryDB', { useNewUrlParser: true, useUnifiedTopology: true });

// Define your MongoDB schema and models here (e.g., User)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const authRoutes = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute');

app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);