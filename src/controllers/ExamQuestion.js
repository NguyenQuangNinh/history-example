'use strict';

import {toInt} from '../libs/Parse';
import * as Service from '../services/ExamQuestion';

export const userList = async (req, res) => {
	try {
		const params = req.params;
		const user_id = toInt(params.user_id, 0);
		const round_id = toInt(params.round_id, 0);
		const test_id = toInt(params.test_id, 0);

		const list = await Service.userList({user_id, round_id, test_id});
		res.sendJson({
			list
		});
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

export const info = async (req, res) => {
	try {
		const query = req.query;
		const user_id = toInt(query.user_id, 0);
		const round_id = toInt(query.round_id, 0);
		const test_id = toInt(query.test_id, 0);

		const info = await Service.info({user_id, round_id, test_id});
		res.sendJson({
			info
		});
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

export const getUserAnswers = async (req, res) => {
	try {
		const query = req.query;
		const user_id = toInt(query.user_id, 0);
		const round_id = toInt(query.round_id, 0);
		const test_id = toInt(query.test_id, 0);

		const info = await Service.getUserAnswers({user_id, round_id, test_id});
		res.sendJson({
			list: info? info.answers_user: null
		});
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};

export const list = async (req, res) => {
	try {
		const query = req.query;
		const user_id = toInt(query.user_id, 0);
		const round_id = toInt(query.round_id, 0);
		const test_id = toInt(query.test_id, 0);

		const list = await Service.list({user_id, round_id, test_id});
		res.sendJson({
			list
		});
	} catch (e) {
		res.sendError({
			error: 1000,
			message: e.message || e.stack || e
		});
	}
};