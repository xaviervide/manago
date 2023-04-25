import mongoose from '../mongoosedb.js';

const projectSchema = mongoose.Schema({
  title: String,
  description: String,
  projectTasks:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    default: []
  }]
})

const Project = mongoose.model('Project', projectSchema);

export default Project;