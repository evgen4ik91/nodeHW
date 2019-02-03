const router = require('express').Router();

const User = require('../schema/user');

router.route('/')
	.get((req,res) => {
		User.find({})
			.then(docs => {
				res.send(docs);
			}).catch(err => console.log(err));
	})
	.post((req,res) => {
		new User(req.body).save()
			.then(() => {
				console.log('user saved');
				res.send(req.body);
			}).catch(err => {
				res.send(null);
				console.log(err);
			})
	});

router.route('/:username')
	.get((req, res) => {
		User.find({ id:req.params.username })
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
	})
	.put((req,res) => {
		User.updateOne({ id:req.params.username }, req.body)
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
	})
	.delete((req,res) => {
		User.deleteOne({ id:req.params.username })
			.then(docs => res.send(docs))
			.catch(err => console.log(err));
	})
	
module.exports = router;