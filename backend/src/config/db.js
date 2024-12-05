import { URI_DB } from "./env.js";
import mongoose from "mongoose";

export const db_connect = async () => {
  try {
    await mongoose.connect(URI_DB);
  } catch (err) {
    throw new Error(`Error al conectarse a la base de datos: ${err.message}`);
  }
};
