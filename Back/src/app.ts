import "reflect-metadata";
import "express-async-errors";
import express from "express";
import cors from "cors"
import "dotenv/config"
import { handlerAppError } from "./errors/handleAppErro";

const app = express();

app.use(express.json());
app.use(cors({
    origin: process.env.URL_FROM_FRONT
}))


app.use(handlerAppError)

export default app;
