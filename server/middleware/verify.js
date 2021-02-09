import jwt from 'jsonwebtoken';

const SECRET = process.env.secret;

const verify = (req, res, next) =>  {
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).send('Access denied, no token present');
  }

  try {
    const verified = jwt.verify(token, SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send('Invalid token');
  }
};

export default verify;