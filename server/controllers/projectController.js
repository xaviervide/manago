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