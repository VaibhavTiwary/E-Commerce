import express from "express";
import dotenv from 'dotenv';
import Connnection from "./database/db.js";
import DefaultData from './default.js'

const app = express();

dotenv.config();

const PORT = 8000;


Connnection();
app.listen(PORT, () => console.log(`Server is running on port ${PORT} hell`));

DefaultData()