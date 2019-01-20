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
			let id = req.params.newsId
			news[id] = {...news[id], ...req.query};
			res.send(news[id]);
		} catch(err) {
			console.log(err);
		}
    })
    .delete((req, res) => {
		try {
			news.splice(req.params.newsId,1);
			res.send(news);
		} catch(err) {
			console.log(err);
		}
	})
	
module.exports = router;