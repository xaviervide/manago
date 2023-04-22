import mongoose from '../mongoosedb.js';

const taskSchema = mongoose.Schema({
  employeeId: mongoose.Types.ObjectId,
  projectId: mongoose.Types.ObjectId,
  timeAmount: Number,
  isBillable: Boolean,
  hourlyRate: Number
})

const Task = mongoose.model('Task', taskSchema);

export default Task;