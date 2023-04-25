import Task from '../models/taskModel.js';
import Team from '../models/teamModel.js';
import User from '../models/userModel.js';

export const createTeam = async (req, res) => {
  try {
    const {userID, title, description} = req.body;
    const teamToAdd = new Team({
      title,
      description
    })

    const updatedUser = await User.findByIdAndUpdate(userID, {$push: {teamIds: teamToAdd._id}});
    const addedTeam = await teamToAdd.save().then();

    res.status(201).json(addedTeam);

  } catch (err) {
    console.log('ERROR CREATING TEAM: ', err);
    res.status(500).json({msg: err});
  }
}

export const getTeamData = async (req, res) => {
  try {
    const teamID = req.params.teamId;
    const teamDocument = await Team.findById(teamID)
      .populate({
        path: 'teamTasks',
        model: Task
      })
      .populate('teamMembers', 'firstName');

    res.status(201).json(teamDocument);

  } catch (err) {
    console.log('ERROR GETTIN TEAM DATA: ', err);
    res.status(500).json({msg: err});
  }
}

export const updateTeamData = async (req, res) => {
  try {

  } catch (err) {
    console.log('ERROR UPDATING TEAM: ', err);
    res.status(500).json({msg: err});
  }
}