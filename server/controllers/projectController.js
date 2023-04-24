import Project from '../models/projectModel.js';
import User from '../models/userModel.js';

export const createProject = async (req, res) => {
  try {
    const {userID, projectName, projectDescription} = req.body;
    const projectToAdd = new Project({
      projectName,
      projectDescription
    })

    const updatedUser = await User.findByIdAndUpdate(userID, {$push: {projectIds: projectToAdd._id}});
    const addedProject = await projectToAdd.save().then();

    res.status(201).json(addedProject);

  } catch (err) {
    console.log('ERROR CREATING PROJECT: ', err);
    res.status(500).json({msg: err});
  }
}

export const getProjectData = async (req, res) => {
  try {
    const projectID = req.params.projectId;
    const projectDocument = await Project.findById(projectID);

    res.status(201).json(projectDocument);

  } catch (err) {
    console.log('ERROR GETTING PROJECT DATA: ', err);
    res.status(500).json({msg: err});
  }
}

export const updateProjectData = async (req, res) => {
  try {
    
  } catch (err) {
    console.log('ERROR UPDATING PROJECT: ', err);
    res.status(500).json({msg: err});
  }
}