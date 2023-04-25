import mongoose from '../mongoosedb.js';

const projectSchema = mongoose.Schema({
  projectName: String,
  projectDescription: String,
  projectTasks: {
    type: [String],
    default: []
  }
})

const Project = mongoose.model('Project', projectSchema);

export default Project;