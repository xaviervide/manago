import mongoose from "../mongoosedb.js";

const teamSchema = mongoose.Schema({
  teamName: String,
  teamDescription: String,
  currentTaskIds: {
    type: [String],
    default: []
  },
  currentMemberIds: {
    type: [String],
    default: []
  } 
})

const Team = mongoose.model('Team', teamSchema);

export default Team;