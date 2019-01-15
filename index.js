const express = require('express');
const app = express();
const port = 3000;

const news = require('./news.json');

app.route('/news')
    .get((req, res) => res.send(news))
    .post((req, res) => {
        news.push({news: 'new', id: news.length});
        res.send(news);
    });

app.route('/news/:newsId')
    .get((req, res) => res.send(news[req.params.newsId]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));