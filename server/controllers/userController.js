import User from '../models/userModel.js';
import Project from '../models/projectModel.js';
import Task from '../models/taskModel.js';
import Team from '../models/teamModel.js';

export const getUserData = async (req, res) => {
  try {
    const userID = req.params.userId;

    /* GET USER DATA */
    const userDocument = await User.findById(userID);

    const userTasks = await Task.find({"_id": {"$in": userDocument.taskIds}});
    const userProjects = await Project
      .find({"_id": {"$in": userDocument.projectIds}})
      // .populate({
      //   path: 'projectTasks',
      //   model: Task
      // })
      // console.log(userProjects)
    const userTeams = await Team.find({"_id": {"$in": userDocument.teamIds}});

    
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