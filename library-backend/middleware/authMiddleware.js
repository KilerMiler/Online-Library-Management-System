// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'secretKey');
        req.userData = { userId: decodedToken.userId, role: decodedToken.role };
        next();
    } 
    catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
};
