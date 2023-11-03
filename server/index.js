// ========== SETUP ========== //

// Import express as framework to build the backend.
import express from 'express';
const app = express();

// dotenv to access .env files that contains vital info.
import dotenv from 'dotenv';
dotenv.config({
    path: './.env'
});

// cors to allow access the api from any origin.
import cors from 'cors';


import morgan from 'morgan';

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

// ========== ENDPOINTS ========== //
// Importing endpoints.
import authRoutes from './routes/auth.js';
import tracksRoutes from './routes/tracks.js';

// Using the endpoints. We stablish some prefix for organization.
app.get("/", (req, res) => {
    res.send({ message: "Successfully connected!" });
});

app.use('/auth', authRoutes);
app.use('/tracks', tracksRoutes);

const PORT = process.env.PORT;
app.listen(PORT || 8000, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});