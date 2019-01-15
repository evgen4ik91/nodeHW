const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;

const news = require('./news.json');

let newObj = {news: 'new', id: news.length};

function getTime() {
    return new Date().toLocaleString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        day:'numeric',
        month: 'short',
        year: 'numeric',
    });
}

router.use(function timeLog (req, res, next) {
    console.log( `${req.method}: ${req.url} Time: ${getTime()}`);
    next();
});

router.route('/news')
    .get((req, res) => res.send(news))
    .post((req, res) => {
        news.push();
        res.send(news);
    });

router.route('/news/:newsId')
    .get((req, res) => res.send(news[req.params.newsId]))
    .put((req, res) => {
        let id = req.params.newsId
        news[id] = {...news[id], ...req.query};
        res.send(news[id]);
    })
    .delete((req, res) => {
        news.splice(req.params.newsId,1);
        res.send(news);
    })

app.use(router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));