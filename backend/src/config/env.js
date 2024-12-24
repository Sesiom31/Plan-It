import dotenv from "dotenv";

dotenv.config();

export const URI_DB = process.env.URI_DB;
export const PORT = process.env.PORT || 5000;
export const SECRET_JWT = process.env.SECRET_JWT;
