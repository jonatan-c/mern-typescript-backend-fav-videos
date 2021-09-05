import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const mongooseOptions = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // user: config.MONGO_USER,
      // pass: config.MONGO_PASSWORD,
    };
    const db = await mongoose.connect(
      `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`
    );
    console.log("database conectado en:", db.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
