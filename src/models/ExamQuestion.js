'use strict';

import Schema from '../schemas/ExamQuestion';

export const list = async ({round_id, user_id, test_id}) => {
	const where = {};
	if(round_id) where.round_id = round_id;
	if(user_id) where.user_id = user_id;
	if(test_id) where.test_id = test_id;

	return await Schema.find(where).select('user_id round_id test_id').exec();
};

export const userList = async ({round_id, user_id, test_id}) => {
	const where = {};
	if(round_id) where.round_id = round_id;
	if(user_id) where.user_id = user_id;
	if(test_id) where.test_id = test_id;

	return await Schema.find(where);
};

export const getUserAnswers = async ({user_id, round_id, test_id}) => {
	return await Schema.findOne({
		user_id,
		round_id,
		test_id
	})
	.select('answers_user').exec();
};

export const info = async ({user_id, round_id, test_id}) => {
	return await Schema.findOne({
		user_id,
		round_id,
		test_id
	});
};

export const addQuestion = async (info) => {
	info.score = 0;
	info.time = 0;
	info.answers_user = [];
	info.created_at = new Date();

	return await Schema.updateOne({
		user_id: info.user_id,
		round_id: info.round_id,
		test_id: info.test_id
	}, {
		$set: info,
		// $setOnInsert: {
		// 	created_at: new Date()
		// }
	}, {
		upsert: true
	});
};

export const pushAnswers = async (user_id, round_id, test_id, answer) => {
	return await Schema.updateOne({
		user_id, round_id, test_id
	}, {
		$set: {
			updated_at: new Date()
		},
		$push: {
			answers_user: answer
		}
	}, {
		upsert: false
	});
};

export const Update = async (user_id, round_id, test_id, info) => {
	info.updated_at = new Date();
	
	return await Schema.updateOne({
		user_id, round_id, test_id
	}, {
		$set: info
	}, {
		upsert: false
	});
};

export const remove = async ({user_id, round_id, test_id}) => {
	return await schema.remove({user_id, round_id, test_id});
};