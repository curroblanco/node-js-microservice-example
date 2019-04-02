import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({
	_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
	title: { type: String, required: true },
	genre: { type: String, required: true },
	year: { type: Number, required: true },
	created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Movie', schema);