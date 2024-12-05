import { PORT } from "./config/env.js";
import { app } from "./app.js";
import { db_connect } from "./config/db.js";

const startApp = async () => {
  try {
    await db_connect();
    console.log("Base conectada");

    app.listen(PORT, () => {
      console.log(`El servidor está escuchando en el puerto ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
};

startApp();
