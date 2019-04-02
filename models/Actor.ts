import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({
	_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
	name: { type: String, required: true },
	surname: { type: String, required: true },
	movieId: { type: mongoose.Schema.Types.ObjectId },
	created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Actor', schema);