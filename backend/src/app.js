import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import userRouter from "./routes/users.routes.js";

export const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.use("/api/auth", userRouter);
