import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/auth.js';
import characterRoutes from './routes/characters.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use('/user', authRoutes);
app.use('/character', characterRoutes);

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

// https://www.mongodb.com/cloud/atlas