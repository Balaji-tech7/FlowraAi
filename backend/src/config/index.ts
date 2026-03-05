import dotenv from "dotenv";

dotenv.config();

export default {
  jwtSecret: process.env.JWT_SECRET || "supersecret",
  port: process.env.PORT || 8000,
};
