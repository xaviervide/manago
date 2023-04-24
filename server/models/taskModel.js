import mongoose from '../mongoosedb.js';

const taskSchema = mongoose.Schema({
  taskName: String,
  taskDescription: String,
  totalTaskTime: {
    type: String,
    default: "00:00"
  }
})

const Task = mongoose.model('Task', taskSchema);

export default Task;