import { SECRET_JWT } from "../config/env.js";
import jwt from "jsonwebtoken";

export const userLogin = async (req, res) => {
  console.log("hola");
  res.json({ message: "endpoint de prueba" });
};

export const verifyToken = async (req, res) => {
  const token = req.cookies.token;
  console.log("Hola");
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_JWT);
    return res
      .status(200)
      .json({ success: true, message: "Token is valid", user: decoded });
  } catch (err) {
    return res.status(403).json({ success: false, message: "Invalid token" });
  }
};
