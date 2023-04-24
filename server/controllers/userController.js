import User from '../models/userModel.js';
import Project from '../models/projectModel.js';
import Task from '../models/taskModel.js';

export const getUserData = async (req, res) => {
  try {
    const userID = req.params.id;
    const userDocument = await User.findById(userID);

    const userProjects = await Project.find({"_id": {"$in": userDocument.projectIds}});
    const userTeams = await Project.find({"_id": {"$in": userDocument.teamIds}});
    const userTasks = await Task.find({"_id": {"$in": userDocument.taskIds}});

    const userData = {
      projects: userProjects,
      teams: userTeams,
      tasks: userTasks
    }

    res.status(201).json(userData);

  } catch (err) {
    console.log('ERROR FETCHING USER DATA: ', err);
    res.status(500).json({msg: err});
  }
}