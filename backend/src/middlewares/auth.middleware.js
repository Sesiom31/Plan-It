import { SECRET_JWT } from "../config/env.js";
import jwt from "jsonwebtoken";

// verificar si existe el token y si es valido
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_JWT);
    req.user = { id: decoded.id, username: decoded.username };
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};
