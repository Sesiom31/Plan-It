import { Router } from "express";
import { userLogin } from "../controllers/users.controller.js";

const router = Router();

router.get("/login", userLogin);

export default router;
