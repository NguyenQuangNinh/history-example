'use strict';

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let schema = new Schema({
	// _id: Schema.Types.ObjectId,
	user_id: {
		type: Number,
		required: true
	},

	// vòng thi số
	round_id: {
		type: Number,
		required: true
	},

	// bài thi số 1, 2, 3
	test_id: {
		type: Number,
		enum: [1, 2, 3],
		required: true
	},

	game_id: {
		type: Number
	},

	// Điểm thi
	score: {
		type: Number,
		default: 0,
		min: 0,
		max: 100
	},

	// thời gian thi
	time: {
		type: Number,
		default: 0,
		min: 0,
		max: 12000
	},

	// chi tiết câu hỏi
	questions: Schema.Types.Mixed,

	// đáp án đúng
	answers_correct: [Schema.Types.Mixed],

	// chi tiết user trả lời
	answers_user: [Schema.Types.Mixed],

	created_at: Date,
	updated_at: Date
});

const col_name = 'exam_users';
schema.set('autoIndex', false);
export default mongoose.model(col_name, schema);