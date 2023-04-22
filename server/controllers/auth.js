import 'dotenv/config.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

/* REGISTER USER */
export const registerUser = async (req, res) => {
  try {
    //RETRIEVE DATA FROM THE REQUEST BODY
    const {
      firstName,
      lastName,
      email,
      password
    } = req.body;

    //GENERAT SALT AND HASH PASSWORD
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    //CREATE A NEW USER WITH THE HASHED PASSWORD
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash
    })

    //SAVE NEW USER TO DATABASE
    const registeredUser = await newUser.save().then();

    //HANDLE RESPONSE
    res.status(201).json(registeredUser);
  } catch (err) {
    //HANDLE ERROR
    console.log('ERROR REGISTERING USER: ', err);
    res.status(500);
    res.end();
  }
}

/* USER LOG IN */
export const loginUser = async (req, res) => {
  try {
    //RETRIEVE DATA FROM REQUEST BODY
    const {
      email,
      password
    } = req.body;

    //CHECK IF IT'S A VALID EMAIL (USER WITH THAT EMAIL ALREADY EXISTS)
    const user = await User.findOne({ email: email });

    //IF IT DOES NOT EXIST (INVALID EMAIL)
    if (!user) {
      res.status(400);
      console.log('ERROR: User does not exist!');
      res.end();
    }

    //IF IT IS A VALID EMAIL, CHECK IF PASSWORD IS CORRECT
    const passwordIsValid = await bcrypt.compare(password, user.password);

    //IF PASSWORD IS INCORRECT
    if (!passwordIsValid) {
      res.status(400);
      console.log('ERROR: Invalid credentials!');
      res.end(); 
    }

    //IF PASSWORD IS CORRECT, AUTHENTICATE USER USING JWT
    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET_KEY);
    //DELETE UNHASHED PASSWORD BEFORE SENDING IT BACK
    user.password = '';
    //HANDLE RESPONSE
    res.status(200).json({ token, user })

  } catch (err) {
    console.log('ERROR LOGGING IN USER');
    res.status(500);
  }
}