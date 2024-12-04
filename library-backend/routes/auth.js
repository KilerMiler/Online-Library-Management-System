// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const user = new User({ username, password, role });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } 
    catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
});

module.exports = router;

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        } 
        
        const isMatch = await user.comparePassword(password);
        
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        const token = jwt.sign({ userId: user._id, role: user.role }, 'secretKey', { expiresIn: '1h' });
        
        res.json({ token, userId: user._id, role: user.role });
    } 
    catch (error) {
    res.status(500).json({ error: 'Login failed' });
    }
});