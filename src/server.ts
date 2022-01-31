import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const DB_MONGO_URL = process.env.DB_MONGO_URL as string;

const app = express();
app.use(express.json());

mongoose.connect(DB_MONGO_URL);

app.listen(3333);
