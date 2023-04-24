import express from 'express';
import { registerUser, loginUser } from './controllers/auth.js';
import { createProject } from './controllers/projectController.js';
import { getUserData } from './controllers/userController.js';
import { addUserTask, updateUserTask } from './controllers/taskController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/new/project', createProject);
router.get('/user/:id', getUserData);
router.post('/new/task', addUserTask);
router.post('/update/task', updateUserTask);

export default router;