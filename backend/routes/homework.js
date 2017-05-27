var express = require('express');
var router = express.Router();
var HomeWork = require('../models/homework');

router.post("/", function(req, res, next){
	var homework = req.body;
	HomeWork.create(homework, function(err, homework){
		if (err) {
			return res.status(400).send("err in post /task");
		} else {
			return res.status(200).json(homework);
		}
	});
});

router.get("/", function(req, res, next){
	HomeWork.find({}, function(err, homeworks){
		if(err){
			return res.status(400).send("err in get /task");
		}else{
			console.log(homeworks);
			console.log("here");
			return res.status(200).json(homeworks);
		}
	})
});

module.exports = router;