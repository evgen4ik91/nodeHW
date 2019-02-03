let getTime = function() {
    return new Date().toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day:'numeric',
        month: 'short',
        year: 'numeric',
    });
}

let checkAuth = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send('Not authorized!');
    }
}

module.exports.checkAuth = checkAuth;
module.exports.getTime = getTime;