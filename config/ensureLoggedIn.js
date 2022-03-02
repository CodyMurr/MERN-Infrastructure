module.exports = function(req, res, next) {
    // Send back code 401 - 'Unauthorized' if not logged in
    if (!req.user) return res.status(401).json('Unauthorized');
    // good to go
    next();
} 