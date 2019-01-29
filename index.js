const express = require('express');
const router = require('./router/app');
const Database = require('./db');

const app = express();
const port = 3000;

let newsdb = new Database(undefined, 'news').connect()
    .then(()=>{
        app.use(router);
        app.listen(port, () => console.log(`Example app listening on port ${port}!`));
    }).catch(err => console.log(err));