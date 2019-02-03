const express = require('express');
const router = express.Router();
const Functions = require('../functions');

router.use(function timeLog (req, res, next) {
    console.log( `${req.method}: ${req.url} Time: ${Functions.getTime()}`);
    next();
});

router.use('/news', require('../controllers/news'));
router.use('/users', require('../controllers/users'));

router.use('*', (req, res) => {
    res.status(404).json({ok: false});
});

module.exports = router;