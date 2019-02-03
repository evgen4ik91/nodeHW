const router = require('express').Router();
const passport = require('passport');

router.route('/')
	.post(passport.authenticate('local', {session: true}), (req,res) => {
		res.send('local auth ok');
	});

router.route('/fb')
	.get(passport.authenticate('facebook', {session: true}), (req,res) => {
		res.send('fb auth ok');
	});
router.route('/fbsuccess')
	.get(passport.authenticate('facebook'), (req,res) => {
		res.send('fb auth ok');
	});

module.exports = router;