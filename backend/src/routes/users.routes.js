import {
  getCategories,
  userGuest,
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/users.controller.js";
import { loginSchema, registerSchema } from "../schemas/userAuth.schema.js";

import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { validateData } from "../utils/validateData.js";
import { verifyToken } from "../controllers/users.controller.js";

const router = Router();

router.get("/verifyToken", verifyToken);
router.post("/register", validateData(registerSchema), userRegister);
router.post("/login", validateData(loginSchema), userLogin);
router.post("/guest", userGuest);
router.post("/logout", userLogout);

router.get("/getCategories", authMiddleware, getCategories);

export default router;
