import Project from '../models/projectModel.js';

export const createProject = async (req, res) => {
  try {
    const { projectName, projectCode } = req.body;

    const newProject = new Project({
      projectName,
      projectCode
    })

    const createdProject = await newProject.save().then();

    res.status(201).json(createdProject);

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