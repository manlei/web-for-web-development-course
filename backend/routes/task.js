var express = require('express');
var router = express.Router();
var Login = require('../models/task');

router.post("/", function(req, res, next){
	var task = req.body;
	Login.create(task, function(err, task){
		if (err) {
			return res.status(400).send("err in post /task");
		} else {
			return res.status(200).json(task);
		}
	});
});

router.get("/", function(req, res, next){
	Login.find({}, function(err, tasks){
		if(err){
			return res.status(400).send("err in get /task");
		}else{
			console.log(tasks);
			console.log(req.body);
			console.log(res.body);
			console.log("here");
			return res.status(200).json(tasks);
		}
	})
});

module.exports = router;