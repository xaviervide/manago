import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) => {
  try {
    //GRAB TOKEN FROM AUTHORIZATION HEADER OF THE REQUEST
    let token = req.header('Authorization');

    //IF THERE'S NO TOKEN
    if (!token) {
      res.status(403);
      console.log('Acess Denied!');
      res.end();
    }

    //ACCOUNT FOR Authorization: <type> <credentials> PATTERN
    if (token.startsWith('Bearer ')) {
      token = token.slice(7, token.length);
    }

    //VERIFY THE TOKEN
    const tokenIsValid = jwt.verify(token, process.env.JWT_SECRET_KEY);

    //UPDATE FLAG IN REQUEST
    req.user = tokenIsValid;
    //CALL NEXT FUNCTION
    next();

  } catch (err) {
    res.status(500);
    console.log('ERROR VERIFYING TOKEN');
    res.end();
  }
}