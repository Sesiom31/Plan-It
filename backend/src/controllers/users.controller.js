import { EXPIRE_TOKEN_IN, NODE_ENV, SECRET_JWT } from "../config/env.js";

import { User } from "../models/user.model.js";
import { createToken } from "../utils/createToken.js";
import jwt from "jsonwebtoken";

const optionsToken = {
  httpOnly: true,
  secure: NODE_ENV === "production",
  sameSite: NODE_ENV === "production" ? "none" : "lax",
  path: "/",
  maxAge: 60 * 60 * 1000, // en milisegundos
};

export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Los campos son requeridos" });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Credenciales incorrectas" });
    }

    const isPassword = await user.comparePassword(password);

    if (!isPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Credenciales incorrectas" });
    }

    const token = createToken(
      { id: user._id, username: user.username },
      { expiresIn: EXPIRE_TOKEN_IN }
    );

    res.cookie("token", token, optionsToken);

    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      success: true,
      message: "Inicio de sesión correcto",
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const userRegister = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Los campos son requeridos" });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ success: false, message: "El usuario ya existe" });
    }

    user = new User({
      username,
      email,
      password,
      lastLogin: new Date(),
    });

    await user.save();

    const token = createToken(
      { id: user._id, username: user.username },
      { expiresIn: EXPIRE_TOKEN_IN }
    );

    res.cookie("token", token, optionsToken);

    res.status(200).json({
      success: true,
      message: "Usuario creado",
      username: user.username,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export const userLogout = async (req, res) => {
  try {
    res.clearCookie("token", optionsToken);
    res
      .status(200)
      .json({ success: true, message: "Cierre de sesión exitoso" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
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
