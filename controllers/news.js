const router = require('express').Router();
const auth = require('../auth');

const News = require('../schema/news');

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
	
router.use(auth.authenticate('local'));
router.route('/:newsId')
    .get((req, res) => {
		News.find({ id:req.params.newsId })
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
	})
    .put((req,res) => {
		News.updateOne({ id:req.params.newsId }, req.body)
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
    })
    .delete((req,res) => {
		News.deleteOne({ id:req.params.newsId })
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
	})
	
module.exports = router;