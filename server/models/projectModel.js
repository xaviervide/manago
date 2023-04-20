import mongoose from '../mongoosedb.js';

const projectSchema = mongoose.Schema({
  projectName: String,
  projectCode: String,
  projectPicPath: String,
  currentEmployeesIds: {
    type: Array,
    default: []
  },
  currentSessionIds: {
    type: Array,
    default: []
  }
})

const Project = mongoose.model('Project', projectSchema);

export default Project;