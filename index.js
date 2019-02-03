const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')
const passport = require('passport');
const Database = require('./db');
const auth = require('./auth');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({
    key: 'sid',
    secret: 'thissecretrocks',
    resave: true,
    saveUninitialized: true
}));

let newsdb = new Database(undefined, 'news').connect()
    .then(()=>{
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(require('./router/app'));
        passport.use(auth);
        passport.serializeUser(function(user, done) {
            done(null, user);
          });
        passport.deserializeUser(function(user, done) {
            done(null, user);
        });
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    }).catch(err => console.log(err));