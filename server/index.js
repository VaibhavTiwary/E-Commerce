import express, { Router } from "express";
import dotenv from 'dotenv';
import Connnection from "./database/db.js";
import DefaultData from './default.js'
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";


const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router);

const PORT = 8000;


Connnection();
app.listen(PORT, () => console.log(`Server is running on port ${PORT} hell`));

DefaultData()