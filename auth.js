const LocalStrategy = require('passport-local');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('./schema/user');

module.exports.local = new LocalStrategy(
	function(username, password, done) {
	  User.findOne({ username, password }, (err, user) => {
			if (err) return done(err);
			if (!user) return done(null, false);
			return done(null, user);
	  });
	}
);

module.exports.fb = new FacebookStrategy({
		clientID: 2235167866547294,
		clientSecret: 'a2b4619a7d6a4526f6cf2514b86d7471',
		callbackURL: "http://localhost:3000/login/fbsuccess"
	},
	function(accessToken, refreshToken, profile, done) {
		console.log(profile.id);
		new User({ facebookId: profile.id }).save()
			.then(user => done(null, user))
			.catch(err => done(err));
	}
);