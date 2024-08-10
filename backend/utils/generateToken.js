import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || "default_secret", {
      expiresIn: "3d",
    });
  };