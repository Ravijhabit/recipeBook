import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { userRouter } from './routes/users.js'; 
import { recipesRouter } from './routes/recipes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/auth', userRouter);
app.use('/recipes',recipesRouter);

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error Connection'));
db.once('open', function(){
    console.log('Connected successfully')
});

app.listen(3001, ()=>{
    console.log('Server Started');
});