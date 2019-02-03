const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./schema/user');

passport.use(new LocalStrategy(
	function(username, password, done) {
	  User.findOne({ username }, (err, user) => {
		if (err) { return done(err); }
		if (!user) { return done(null, false); }
		if (!user.verifyPassword(password)) { return done(null, false); }
		return done(null, user);
	  });
	}
));

module.exports = passport;