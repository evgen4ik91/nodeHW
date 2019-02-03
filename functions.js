module.exports.getTime = () => {
    return new Date().toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day:'numeric',
        month: 'short',
        year: 'numeric',
    });
};

module.exports.checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) next();
    else res.status(401).send('Not authorized!');
};

module.exports.timeLog = (req, res, next) => {
    console.log(`${req.method}: ${req.url} Time: ${this.getTime()}`);
    next();
};