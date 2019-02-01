const express = require('express');
const bodyParser = require('body-parser');
const Database = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let newsdb = new Database(undefined, 'news').connect()
    .then(()=>{
        app.use(require('./router/app'));
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    }).catch(err => console.log(err));