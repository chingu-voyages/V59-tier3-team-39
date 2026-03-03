import "dotenv/config";
import path from "path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join(__dirname, "prisma", "schema.prisma"),
  migrations: {
    path: path.join(__dirname, "prisma", "migrations"),
  },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
