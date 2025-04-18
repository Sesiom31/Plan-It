import { loginSchema, registerSchema } from "../schemas/userAuth.schema.js";
import {
  userLogin,
  userLogout,
  userRegister,
} from "../controllers/users.controller.js";

import { Router } from "express";
import { validateData } from "../utils/validateData.js";
import { verifyToken } from "../controllers/users.controller.js";

const router = Router();

router.get("/verifyToken", verifyToken);
router.post("/register", validateData(registerSchema), userRegister);
router.post("/login", validateData(loginSchema), userLogin);
router.post("/logout", userLogout);

export default router;
