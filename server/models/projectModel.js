import mongoose from '../mongoosedb.js';

const projectSchema = mongoose.Schema({
  projectName: String,
  projectDescription: String,
  projectCode: {
    type: String,
    unique: true
  },
  currentEmployeesIds: {
    type: Array,
    default: []
  },
  currentTaskIds: {
    type: Array,
    default: []
  }
})

const Project = mongoose.model('Project', projectSchema);

export default Project;