import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import { pool } from '../db/connect.js';

export function isInvalidField(receivedFields, validFieldsToUpdate) {
  return receivedFields.some(
    (field) => validFieldsToUpdate.indexOf(field) === -1 
  );
};

export async function validateUser(email, password) {
  const result = await pool.query(
    'select userid, email, password from users where email = $1',
    [email]
  );
  const user = result.rows[0];
  if (user) {
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      delete user.password;
      return user;
    } else {
      throw new Error();
    }
  } else {
    throw new Error();
  }
};

export async function generateAuthToken(user) {
  const { userid, email } = user;
  const secret = process.env.secret;
  const token = jwt.sign({ userid, email }, secret);
  return token;
};