const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./schema/user');

module.exports = new LocalStrategy(
	function(username, password, done) {
	  User.findOne({ username, password }, (err, user) => {
			if (err) { return done(err); }
			if (!user) { return done(null, false); }
			return done(null, user);
	  });
	}
);