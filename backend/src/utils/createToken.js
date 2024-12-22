import { SECRET_JWT } from "../config/env.js";
import jwt from "jsonwebtoken";

export const createToken = (payload) => {
  return jwt.sign(payload, SECRET_JWT, { expiresIn: "1h" });
};
