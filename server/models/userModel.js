import mongoose from '../mongoosedb.js';

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  profilePicPath: String,
  email: String,
  password: String
})

const User = mongoose.model('User', userSchema);

export function postOne (user) {
  const newUser = new User(user);
  newUser.save()
    .catch(err => console.log('ERROR SAVING USER: ', err));
}