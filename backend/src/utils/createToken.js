import { SECRET_JWT } from "../config/env.js";
import jwt from "jsonwebtoken";

/**
 * Crea un token JWT firmado.
 *
 * @param {object} payload - Los datos que se incluirán en el token.
 * @param {object} [options={}] - Opciones adicionales para el token.
 * @param {string} [options.expiresIn="1h"] - Tiempo de expiración del token (e.g., "1h", "7d").
 * @returns {string} Token firmado.
 * @throws {Error} Si no se puede firmar el token.
 */

export const createToken = (payload, options = {}) => {
  try {
    if (typeof payload !== "object" || payload === null) {
      throw new Error("El payload debe ser un objeto válido.");
    }

    const { expiresIn = "1h", ...restOptions } = options;
    console.log(options);

    return jwt.sign(payload, SECRET_JWT, {
      expiresIn,
      ...restOptions,
    });
  } catch (error) {
    console.error("Error al crear el token JWT:", error.message);
    throw new Error("No se pudo generar el token.");
  }
};
