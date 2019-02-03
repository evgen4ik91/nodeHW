const express = require('express');
const router = express.Router();
const timeLog = require('../functions').timeLog;

router.use(timeLog);

router.use('/news', require('../controllers/news'));
router.use('/users', require('../controllers/users'));
router.use('/login', require('../controllers/login'));

router.use('*', (req, res) => {
    res.status(404).json({ok: false});
});

module.exports = router;