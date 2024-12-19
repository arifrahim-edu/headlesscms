import { DataSource } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

export const AppDataSource = new DataSource({
  type: process.env.DB_TYPE as "mysql", // Database type
  host: process.env.DB_HOST, // Host address
  port: Number(process.env.DB_PORT), // Port number
  username: process.env.DB_USERNAME, // Database username
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_DATABASE, // Database name
  synchronize: process.env.DB_SYNCHRONIZE === "true", // Auto synchronize schema
  logging: process.env.DB_LOGGING === "true", // Enable query logging
  entities: ["core/models/*.ts"], // Path to entity files
  migrations: ["core/migrations/*.ts"], // Path to migration files
});