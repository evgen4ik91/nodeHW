const router = require('express').Router();
const mongoose = require('mongoose');
const passport = require('passport');

const News = require('../schema/news');

router.route('/')
    .get((req,res) => {
		try {
			News.find({},(err,docs) => {
				if (err) throw new Error(err);
				res.send(docs);
			});
		} catch(err) {
			console.log(err);
		}
	})
    .post((req,res) => {
		try {
			if (req.body) {
				new News(req.body).save(function (err) {
					if (err) throw new Error(err);
					console.log('news saved');
					res.send(req.body);
				});
			} else {
				res.send(null);
				throw new Error('Body is empty');
			}
		} catch(err) {
			console.log(err);
		}
    });

router.route('/:newsId')
    .get((req, res) => {
		try {
			News.find({ id:req.params.newsId }, (err,docs) => {
				if (err) throw new Error(err);
				res.send(docs);
			});
		} catch(err) {
			console.log(err);
		}
	})
    .put((req,res) => {
		try {
			News.updateOne({ id:req.params.newsId }, req.body , (err,docs) => {
				if (err) throw new Error(err);
				res.send(docs);
			});
		} catch(err) {
			console.log(err);
		}
    })
    .delete((req,res) => {
		try {
			News.deleteOne({ id:req.params.newsId }, (err,docs) => {
				if (err) throw new Error(err);
				res.send(docs);
			});
		} catch(err) {
			console.log(err);
		}
	})
	
module.exports = router;