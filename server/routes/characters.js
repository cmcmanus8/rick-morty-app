import express from 'express';
import { setFavourite, removeFavourite, fetchFavourites } from '../controllers/characters.js';
import verify from '../middleware/verify.js';

const router = express.Router();

// TODO: add verify to validate each request
router.get('/faves', fetchFavourites);
router.post('/:id', setFavourite);
router.delete('/:id', removeFavourite);

export default router;