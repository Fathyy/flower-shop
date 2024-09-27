import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";
import authRoutes from './routes/auth.routes.js';
import flowerRoutes from './routes/flowers.routes.js';
import User from './models/user.model.js';
import Flower from './models/flower.model.js';
import { flowers, users } from './data/index.js';

dotenv.config();

// connect to db
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB")
})
.catch((err) => {
    console.log(err)
})

const app = express();
app.use(express.json());

// Configure CORS to allow requests from your frontend
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

// Handle preflight requests
app.options('*', cors(corsOptions));

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})

app.use('/api/auth', authRoutes)
app.use('/api/flowers', flowerRoutes)

// middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    })
});


 /* ADD DATA ONE TIME */
    // User.insertMany(users);
    // Flower.insertMany(flowers)

