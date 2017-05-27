var mongoose= require('mongoose');
var HomeWork = new mongoose.Schema({
	content: String,
	href: String
});

module.exports = mongoose.model("HomeWork",HomeWork);