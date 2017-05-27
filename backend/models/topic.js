var mongoose = require('mongoose');
var TopicSchema = new mongoose.Schema({
	content:String
});

module.exports=mongoose.model("Topic",TopicSchema);