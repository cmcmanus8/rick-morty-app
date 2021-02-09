import express from 'express';
import verify from '../middleware/verify.js';
import { register, signin } from '../controllers/auth.js';

const router = express.Router();

router.post('/signin', signin);
router.post('/register', register);
// router.post('/logout', verify, logOut);

export default router;