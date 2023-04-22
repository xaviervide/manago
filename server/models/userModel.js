import mongoose from '../mongoosedb.js';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 2,
    max: 15
  },
  lastName: {
    type: String,
    required: true,
    min: 2,
    max: 15
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: /.+\@.+\..+/
  },
  password: {
    type: String,
    required: true
  },
  projectIds: {
    type: [String],
    default: []
  },
  teamIds: {
    type: [String],
    default: []
  },
  taskIds: {
    type: [String],
    default: []
  }
})

const User = mongoose.model('User', userSchema);

export default User;