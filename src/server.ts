import express, { Application } from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from "morgan";
import { connectionDB } from "./configs/database.connection";


dotenv.config();

connectionDB();

const app: Application = express();

app.use(cors());
app.use(morgan("tiny"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT: number = Number(process.env.PORT) || 2000;


console.log(PORT, typeof PORT);
app.listen(PORT, () => {
    console.log(`Server Is Running on http://localhost${PORT}`);
});