import express, { Application } from "express";
import dotenv from 'dotenv';


dotenv.config();

const app: Application = express();

const PORT: number = Number(process.env.PORT) || 2000
app.listen();