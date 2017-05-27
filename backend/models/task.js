var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	user: String,
	password:String
});

module.exports = mongoose.model("Login", TaskSchema);