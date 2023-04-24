import mongoose from '../mongoosedb.js';

const taskSchema = mongoose.Schema({
  taskName: String,
  taskDescription: String,
  employeeId: String,
  projectId: String,
  timeAmount: String,
})

const Task = mongoose.model('Task', taskSchema);

export default Task;