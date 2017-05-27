var express = require('express');
var router = express.Router();
var Topic = require('../models/topic');

router.post("/", function(req, res, next){
	var topic = req.body;
	Topic.create(topic, function(err, topic){
		if (err) {
			return res.status(400).send("err in post /task");
		} else {
			return res.status(200).json(topic);
		}
	});
});

router.get("/", function(req, res, next){
	Topic.find({}, function(err, topics){
		if(err){
			return res.status(400).send("err in get /task");
		}else{
			console.log(topics);
			console.log("here");
			return res.status(200).json(topics);
		}
	})
});

module.exports = router;