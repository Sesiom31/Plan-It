import express from "express";
import userRouter from "./routes/users.routes.js";

export const app = express();

app.use("/auth", userRouter);
