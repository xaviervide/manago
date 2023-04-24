import express from 'express';
import { registerUser, loginUser } from './controllers/auth.js';
import { createProject } from './controllers/projectController.js';
import { getUserData } from './controllers/userController.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/new/project', createProject);
router.get('/user/:id', getUserData);

export default router;