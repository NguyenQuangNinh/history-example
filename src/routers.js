'use strict';

import express from 'express';
// import {requestLogin, requestNotLogin, requestRole} from './middlewares/Authentication';
import * as ExamQuestionController from './controllers/ExamQuestion';

const router = express.Router();

// router.get('/list', ExamQuestionController.list);
// router.get('/info', ExamQuestionController.info);
// router.get('/user-answer', ExamQuestionController.getUserAnswers);

router.get('/:user_id?', ExamQuestionController.userList);
router.get('/:user_id?/:round_id?', ExamQuestionController.userList);
router.get('/:user_id?/:round_id?/:test_id?', ExamQuestionController.userList);

export default router;