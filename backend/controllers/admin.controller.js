import Admin from "../models/admin.model.js";

export const showAllAdmin = async (req, res) => {
  try {
    const allAdmin = await Admin.find({});
    const adminDetails = allAdmin.map((admin) => ({
      adminEmail: admin.adminEmail,
      adminName: admin.adminName,
    }));
    return res.status(200).json(adminDetails);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "error in admin Controller" });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { adminEmail } = req.body;
    await Admin.deleteOne({ adminEmail });
    return res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: "error in deleteAdmin Controller" });
  }
};

export const verifyTokenAdmin = (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret"
    );
    return res.status(200).json({ success: true, decoded });
  } catch (error) {
    return res.status(401).json({ success: false, message: "Invalid token" });
  }
};
