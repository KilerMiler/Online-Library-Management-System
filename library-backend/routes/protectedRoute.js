// routes/protectedRoute.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../library-backend/middleware/authMiddleware');

router.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'This is a protected route' });
});

module.exports = router;