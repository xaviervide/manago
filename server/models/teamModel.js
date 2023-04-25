import mongoose from "../mongoosedb.js";

const teamSchema = mongoose.Schema({
  title: String,
  description: String,
  teamTasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task',
    default: []
  }],
  teamMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: []
  }] 
})

const Team = mongoose.model('Team', teamSchema);

export default Team;