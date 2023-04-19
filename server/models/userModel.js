import mongoose from '../mongoosedb.js';

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  profilePicPath: String,
  email: String,
  password: String
})

const User = mongoose.model('User', userSchema);

export default User;