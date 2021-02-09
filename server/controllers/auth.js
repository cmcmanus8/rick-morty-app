import mongoose from 'mongoose';
import { validateUser, isInvalidField, generateAuthToken } from '../utils/common.js';
import bcrypt from 'bcryptjs';


export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const validFieldsToUpdate = [
      'firstName',
      'lastName',
      'email',
      'password',
    ];
    const receivedFields = Object.keys(req.body);

    // check if data coming to API contains required fields
    const isInvalidFieldProvided = isInvalidField(
      receivedFields,
      validFieldsToUpdate
    );

    if (isInvalidFieldProvided) {
      return res.status(400).send({
        signupError: 'Invalid field.'
      });
    }
    
    // check if user already exists
    const result = await pool.query(
      'select count(*) as count from users where email=$1',
      [email]
    );

    // result will be returned in rows property of result
    const count = result.rows[0].count;
    if (count > 0) {
      return res.status(400).send({
        signUpError: 'User with this email already exists.'
      });
    }

    // insert new user if does not already exist
    // encrypt password before
    const hashedPassword = await bcrypt.hash(password, 8);
    await pool.query(
      'insert into users(first_name, last_name, email, password) values($1, $2, $3, $4)',
      [firstName, lastName, email, hashedPassword]
    );
    res.status(201).send();
  } catch (error) {
    res.status(400).send({
      signupError: 'Error while signing up.'
    });
  }
};

export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await validateUser(email, password);
    if (!user) {
      res.status(400).send({
        signinError: 'Email/password does not match.'
      });
    }
    const token = await generateAuthToken(user);
    const result = await pool.query(
      'insert into tokens(access_token, userid) values($1, $2) returning *',
      [token, user.userid]  
    );
    if (!result.rows[0]) {
      return res.status(400).send({
        signinError: 'Error while signing in.'
      });
    }
    user.token = result.rows[0].access_token;
    res.send(user);
  } catch (error) {
    res.status(400).send({
      signinError: 'Email/password does not match.'
    });
  }
};

export const logOut = async (req, res) => {
  try {
    const {userid, access_token } = req.user;
    await pool.query('delete from tokens where userid=$1 and access_token=$2', [
      userid,
      access_token
    ]);
    res.send();
  } catch (error) {
    res.status(400).send({
      logoutError: 'Error while logging out.'
    });
  }
};