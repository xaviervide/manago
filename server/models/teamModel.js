import mongoose from "../mongoosedb.js";

const teamSchema = mongoose.Schema({
  teamName: String,
  teamDescription: String,
  teamTasks: {
    type: [String],
    default: []
  },
  teamMembers: {
    type: [String],
    default: []
  } 
})

const Team = mongoose.model('Team', teamSchema);

export default Team;