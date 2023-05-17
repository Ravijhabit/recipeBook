import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

import { userRouter } from './routes/users.js'; 
import { recipesRouter } from './routes/recipes.js';

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.use(cors({
    credentials:true,
    //origin:'https://recipe-book-evm3.onrender.com'
    origin:'*'
}));
app.use('/auth', userRouter);
app.use('/recipes',recipesRouter);
app.post('/randomnumbergenerator', (req,res)=>{
    console.log(req.body);
    const {minValue, maxValue} = req.body;
    console.log(minValue, maxValue);
    res.json(minValue+Math.random()*(maxValue-minValue));
});

mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Error Connection'));
db.once('open', function(){
    console.log('Connected successfully')
});

app.listen(port, ()=>{
    console.log(`Server Started at port ${port}`);
});