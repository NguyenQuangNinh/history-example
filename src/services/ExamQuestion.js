'use strict';

import * as Model from '../models/ExamQuestion';

export const list = async ({user_id, round_id, test_id}) => {
	return await Model.list({user_id, round_id, test_id});
};

export const userList = async ({user_id, round_id, test_id}) => {
	return await Model.userList({user_id, round_id, test_id});
};

export const getUserAnswers = async ({user_id, round_id, test_id}) => {
	return await Model.getUserAnswers({user_id, round_id, test_id});
};

export const info = async ({user_id, round_id, test_id}) => {
	return await Model.info({user_id, round_id, test_id});
};

export const addQuestion = async (info) => {
	return await Model.addQuestion(info);
};

export const pushAnswers = async (user_id, round_id, test_id, answer) => {
	return await Model.pushAnswers(user_id, round_id, test_id, answer);
};

export const Update = async (user_id, round_id, test_id, info) => {
	return await Model.Update(user_id, round_id, test_id, info);
};