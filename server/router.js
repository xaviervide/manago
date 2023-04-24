import express from 'express';
import { getUserData } from './controllers/userController.js';
import { registerUser, loginUser } from './controllers/auth.js';
import { createProject, getProjectData, updateProjectData } from './controllers/projectController.js';
import { createTask, getTaskData, updateTaskData } from './controllers/taskController.js';
import { createTeam, getTeamData, updateTeamData } from './controllers/teamController.js';

const router = express.Router();

/* AUTH ROUTES */
router.post('/register', registerUser);
router.post('/login', loginUser);

/* USER ROUTES */
router.get('/user/:userId', getUserData);

/* PROJECT ROUTES */
router.get('/project/:projectId', getProjectData);
router.post('/new/project', createProject);
router.post('/update/project', updateProjectData);

/* TASK ROUTES */
router.get('/task/:taskId', getTaskData);
router.post('/new/task', createTask);
router.post('/update/task', updateTaskData);

/* TEAM ROUTES */
router.get('/team/:teamId', getTeamData);
router.post('/new/team', createTeam);
router.post('/update/team', updateTeamData);

export default router;