import "module-alias/register";

import helmet from "helmet";
import cors from "cors";
import { connect } from "mongoose";
import { StartProjectInit } from "@tsclean/core";

import { AppContainer } from "@/application/app";
import { MONGODB_URI, PORT } from "@/application/config/environment";

async function run(): Promise<void> {
  await connect(MONGODB_URI);
  console.log("DB Mongo connected");
  const app = await StartProjectInit.create(AppContainer);
  app.use(helmet());
  const allowedOrigins = ["http://localhost:3000"];

  const options: cors.CorsOptions = {
    origin: allowedOrigins,
  };
  app.use(cors(options));

  await app.listen(PORT, () => console.log("Running on port: " + PORT));
}

run();
