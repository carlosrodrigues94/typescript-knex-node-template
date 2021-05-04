import * as path from "path";

import * as dotenv from "dotenv";

import { Knex } from "knex";

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

const knexConfig: Knex.Config = {
  client: "pg",
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
  },
  migrations: {
    directory: "./migrations",
    extension: "ts",
  },
};

export default knexConfig;
