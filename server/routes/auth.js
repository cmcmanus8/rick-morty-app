import express from 'express';
import verify from '../middleware/verify.js';
import { register, signIn, logOut } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', register);
router.post('/signin', signIn);
router.post('/logout', verify, logOut);

export default router;