const router = require('express').Router();
const passport = require('passport');

const News = require('../schema/news');
const checkAuth = require('../functions').checkAuth;

router.route('/')
    .get((req,res) => {
		News.find({})
			.then(docs => {
				res.send(docs);
			}).catch(err => console.log(err));
	})
    .post((req,res) => {
		new News(req.body).save()
			.then(() => {
				console.log('news saved');
				res.send(req.body);
			}).catch(err => {
				res.send(null);
				console.log(err);
			})
	});
	
router.route('/:newsId')
    .get((req, res) => {
		News.find({ id:req.params.newsId })
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
	})
    .put(checkAuth, (req,res) => {
		News.updateOne({ id:req.params.newsId }, req.body)
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
    })
    .delete(checkAuth, (req,res) => {
		News.deleteOne({ id:req.params.newsId })
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
	})

router.route('/login')
	.post(passport.authenticate('local', {session: true}), (req,res) => {
		res.send('ok');
	});
	
module.exports = router;