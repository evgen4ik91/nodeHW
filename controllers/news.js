const router = require('express').Router();

const news = require('../news.json');

router.route('/')
    .get((req, res) => res.send(news))
    .post((req, res) => {
		try {
			news.push({title: 'new news item'});
        	res.send(news);
		} catch(err) {
			console.log(err);
		}
        
    });

router.route('/:newsId')
    .get((req, res) => res.send(news[req.params.newsId]))
    .put((req, res) => {
		try {
			if (req.body) {
				let id = req.params.newsId
				news[id] = {...news[id], ...req.body};
				res.send(news[id]);
			} else {
				res.send(news);
				throw new Error('Body is empty');
			}
		} catch(err) {
			console.log(err);
		}
    })
    .delete((req, res) => {
		try {
			let newsID = req.params.newsId;
			if (newsID >= 0) {
				news.splice(newsID,1);
				res.send(news[newsID]);
			} else {
				throw new Error('incorrect ID');
			}
		} catch(err) {
			console.log(err);
		}
	})
	
module.exports = router;