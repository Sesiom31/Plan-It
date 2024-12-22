import { Router } from "express";
import { userLogin } from "../controllers/users.controller.js";
import { verifyToken } from "../controllers/users.controller.js";

const router = Router();

router.get("/login", userLogin);
router.get("/verifyToken", verifyToken);

export default router;
