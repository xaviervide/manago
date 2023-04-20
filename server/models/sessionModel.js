import mongoose from '../mongoosedb.js';

const sessionSchema = mongoose.Schema({
  employeeId: mongoose.Types.ObjectId,
  projectId: mongoose.Types.ObjectId,
  timeAmount: Number,
  isBillable: Boolean,
  hourlyRate: Number
})

const Session = mongoose.model('Session', sessionSchema);

export default Session;