import jwt from "jsonwebtoken"
import Employee from "../models/user.model.js";
export const getUserInfo = async (req, res) => {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || "default_secret"
      );
      const userId = decoded.id;
  
      const user = await Employee.findById(userId);
  
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
  
      return res.status(200).json({
        success: true,
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
  };