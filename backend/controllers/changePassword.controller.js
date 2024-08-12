import Employee from "../models/user.model.js";

export const changePassword = async (req, res) => {
  const { empId, oldPassword, newPassword } = req.body;

  try {
    const emp = await Employee.findOne({ empId });
    if (!emp) {
      return res.status(404).json({ message: "Employee not found" });
    } else {
      if (oldPassword === emp.password) {
        emp.password = newPassword;
        await emp.save();

        res.json({ message: "Password changed successfully" });
      } else {
        return res.status(400).json({ message: "Incorrect old password" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const adminChangePassword = async (req, res) => {
  const { adminEmail, oldPassword, newPassword } = req.body;

  try {
    const admin = await Employee.findOne({ adminEmail });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    } else {
      if (oldPassword === emp.password) {
        admin.password = newPassword;
        await admin.save();

        res.json({ message: "Password changed successfully" });
      } else {
        return res.status(400).json({ message: "Incorrect old password" });
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
