import Admin from "../models/admin.model.js";
import jwt from "jsonwebtoken";
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '3d' });
}

export const adminSignup = (req, res) => {};

export const adminLogin = async (req, res) => {
  const { adminEmail, password } = req.body;
  try {
    const admin = await Admin.findOne({ adminEmail });

    if (!admin) {
      return res.status(400).json({ error: "Admin Not Found" });
    } else {
      if (password === admin.adminPassword) {
        const token = createToken(admin._id);

        return res.status(200).json({
          succes:true,
          token,
          message: "Logged in Succesfully",
          name:admin.adminName,
          password: password,
          email: adminEmail,
        });
      } else {
        return res.status(400).json({ error: "incorrect password" });
      }
    }
  } catch (error) {
      console.log(error.message);
    return res.status(500).json({ error: "error in admin Login Controller" });
  }
};
