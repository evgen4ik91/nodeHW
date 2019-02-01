const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

const News = require('../schema/news');

let news = false;

router.route('/')
    .get((req, res) => res.send(news))
    .post((req, res) => {
			try {
				res.send(news);
			} catch(err) {
				console.log(err);
			}
        
    });

router.route('/:newsId')
    .get((req, res) => res.send(1))
    .put((req, res) => {
			try {
				if (req.body) {
					console.log(req.body);
					let news = new News(req.body);
					news.save(function (err) {
						if (err) return console.error(err);
						console.log('news saved');
						res.send(req.body);
					});
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
					
				} else {
					throw new Error('incorrect ID');
				}
			} catch(err) {
				console.log(err);
			}
		})
	
module.exports = router;