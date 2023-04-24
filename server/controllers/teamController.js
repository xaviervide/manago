import Team from '../models/teamModel.js';
import User from '../models/userModel.js';

export const createTeam = async (req, res) => {
  try {
    const {userID, teamName, teamDescription} = req.body;
    const teamToAdd = new Team({
      teamName,
      teamDescription
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