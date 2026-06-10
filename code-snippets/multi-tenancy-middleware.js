/**
 * ============================================================================
 * MULTI-TENANCY & RBAC SECURITY MIDDLEWARE
 * Intercepts requests, validates JWT, and ensures strict data isolation.
 * ============================================================================
 */
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access denied. Authentication required.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Session expired or invalid token.' });
        }
        
        // Inject validated user payload (including role and tenant_id) into request
        // This ensures subsequent SQL queries are isolated by tenant
        req.user = user; 
        next();
    });
};

module.exports = authenticateToken;
