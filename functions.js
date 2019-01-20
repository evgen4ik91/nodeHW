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

module.exports.getTime = getTime