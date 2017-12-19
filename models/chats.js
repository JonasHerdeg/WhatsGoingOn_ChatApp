const mongoose = require('mongoose');
const config = require('../config/database');


// Chat Schema

const ChatSchema = mongoose.Schema({
	message : {
		type : String
	},
	from : {
		type : String
	},
	to : {
		type : String
	}
});

const Chats = module.exports = mongoose.model('Chats', ChatSchema);

module.exports.getChatById = function(id, callback) {
	Chats.findById(id, callback);
};

module.exports.getChatsBySender = function(sender, callback) {
	const query = {from: sender}
	Chats.findOne(query, callback);
};