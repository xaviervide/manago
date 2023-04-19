import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

/* REGISTER USER */
export const registerUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      profilePicPath,
      email,
      password
    } = req.body;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      profilePicPath,
      email,
      password: passwordHash
    })

    const registeredUser = await newUser.save();
    res.status(201);
    res.send(registeredUser);
  } catch (err) {
    console.log('ERROR REGISTERING USER: ', err);
    res.status(500);
  }
}