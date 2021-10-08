import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

//Config
const server = express();
dotenv.config();

//Middlewares
server.use(express.json());
server.use(cors());

//Routes
const indexRoute = require('./routes/index');
const birthdayRoute = require('./routes/birthdays');

server.use('/', indexRoute);
server.use('/birthday', birthdayRoute);

const MONGO_OPTIONS = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false,
};

mongoose.connect(process.env.MONGO_URI || '',MONGO_OPTIONS);

mongoose.connection.once('connected',()=>console.log('Connected to MongoDB database!'))
mongoose.connection.once('error',()=>console.log('Error connecting to MongoDB database!'))

export default server;