const express = require('express');
const router = express.Router();
const app = express();
const port = 3000;

const news = require('./news.json');

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
    console.log( `URL: ${req.url} (${req.method}) Time: ${getTime()}`);
    next();
});

router.route('/news')
    .get((req, res) => res.send(news))
    .post((req, res) => {
        news.push({news: 'new', id: news.length});
        res.send(news);
    });

router.route('/news/:newsId')
    .get((req, res) => res.send(news[req.params.newsId]))
    .delete((req, res) => res.send(news[req.params.newsId]))

app.use(router);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));